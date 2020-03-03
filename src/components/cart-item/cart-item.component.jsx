import React from "react";
import Icon from "../icon/Icon.component";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CartItem = ({ item, dispatch }) => {
	const { imageUrl, price, name, quantity } = item;

	const handleClick = () => {
		dispatch(clearItemFromCart(item));
	};

	return (
		<div className='cart-item'>
			<img src={imageUrl} alt='item' />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</div>
			<Icon name='close-outline' className='cart-item__icon' onClick={handleClick} />
		</div>
	);
};

export default connect(null)(CartItem);
