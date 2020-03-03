//LIBRARIES
import React, { useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

//COMPONENTS
import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";

//SELECTORS
import { selectCartItems } from "../../redux/cart/cart.selectors";

//ACTIONS
import { toggleCartHidden, clearAllItemsFromCart } from "../../redux/cart/cart.actions.js";

// FIRESTORE REFERENCES
import { dataRef } from "../../firebase/firebase.references";

const CartDropdown = ({ cartItems, toggleCartHidden, clearAllItemsFromCart }) => {
	const node = useRef();

	const handleCheckout = async () => {
		await cartItems.map((item) => {
			return dataRef.doc(item.id).update({ ...item, type: "buy" });
		});
		clearAllItemsFromCart();
		toggleCartHidden(true);
	};

	const handleClick = useCallback(
		(event) => {
			if (node.current.contains(event.target)) return; // Handle clicks only outside the node
			toggleCartHidden(false);
		},
		[toggleCartHidden]
	);
	useEffect(() => {
		document.addEventListener("mousedown", handleClick);
		return () => {
			// CLEAR EVENT LISTENER
			document.removeEventListener("mousedown", handleClick);
		};
	}, [handleClick]);

	return (
		<div className='cart-dropdown' ref={node}>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => {
						return <CartItem key={cartItem.id} item={cartItem} />;
					})
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
	clearAllItemsFromCart: () => dispatch(clearAllItemsFromCart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
