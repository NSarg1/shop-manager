import React from "react";
import Button from "../Button/Button.component";
import { Image } from "../styled-components/styled-components";

const RotatingCard = (props) => {

	const { price, name, imageUrl } = props;

	return (
		<div className='ns-card'>
			<div className='ns-card__side ns-card__side--front'>
				<Image imageUrl={imageUrl} width='100%' height='100%' />
				<div className='ns-card__details'>{name}</div>
			</div>

			<div className='ns-card__side ns-card__side--back'>
				<div className='ns-card__price-box'>
					<p className='ns-card__price-only'>Only</p>
					<p className='ns-card__price-value'>{price}$</p>
				</div>
				<Button className='ns-card__add-btn'>ADD TO CART</Button>
			</div>
		</div>
	);
};

export default RotatingCard;
