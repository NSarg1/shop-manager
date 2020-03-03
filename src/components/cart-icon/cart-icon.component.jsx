import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount, selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "./shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount, hidden }) => {
	const handleClick = () => {
		if (hidden === false) return;
		toggleCartHidden(true);
	};

	return (
		<div className='cart-icon' onMouseDown={handleClick}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
