import React from "react";
import Button from "../Button/Button.component";
import { Image } from "../styled-components/styled-components";

const RotatingCard = (props) => {
	const { price, name, imageUrl } = props;

	return (
		<div className='card'>
			<div className='card__side card__side--front'>
				<Image imageUrl={imageUrl} width='100%' height='100%' />
				<div className='card__details'>{name}</div>
			</div>

			<div className='card__side card__side--back'>
				<div className='card__price-box'>
					<p className='card__price-only'>Only</p>
					<p className='card__price-value'>{price}$</p>
				</div>
				<Button className='card__add-btn'>ADD TO CART</Button>
			</div>
		</div>
	);
};

export default RotatingCard;
