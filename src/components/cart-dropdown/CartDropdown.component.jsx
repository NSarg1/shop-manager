import React, { useEffect, useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems, selectCartHidden } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

const CartDropdown = ({ cartItems, dispatch }) => {
	const dropdownRef = useRef({});
	const [dropdownNode, setDropdownNode] = useState({});

	const handleClick = useCallback(
		(event) => {
			if (dropdownNode.contains(event.target)) return;
			dispatch(toggleCartHidden());
		},
		[dispatch, dropdownNode]
	);

	useEffect(() => {
		setDropdownNode(dropdownRef.current);

		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [dispatch, handleClick]);

	return (
		<div className='cart-dropdown' onClick={handleClick} ref={dropdownRef}>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<Button
				onClick={() => {
					dispatch(toggleCartHidden());
				}}>
				GO TO CHECKOUT
			</Button>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	hidden: selectCartHidden,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
