// LIBRARIES
import React from "react";
import { connect } from "react-redux";

// COMPONENTS
import Button from "../button/Button.component";
import { Image } from "../styled-components/styled-components";

import { addItem } from "../../redux/cart/cart.actions";

const ShopCard = (props) => {
	const { item, addItem } = props;

	return (
		<div className='ns-card'>
			<div className='ns-card__side ns-card__side--front'>
				<Image imageUrl={item.imageUrl} width='100%' height='100%' />
				<div className='ns-card__details'>{item.name}</div>
			</div>

			<div className='ns-card__side ns-card__side--back'>
				<div className='ns-card__price-box'>
					<p className='ns-card__price-only'>Only</p>
					<p className='ns-card__price-value'>{item.price}$</p>
				</div>
				<Button className='ns-card__add-btn' onClick={() => addItem(item)}>
					ADD TO CART
				</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopCard);
