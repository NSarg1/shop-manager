import React from "react";
import Tooltip from "../tooltip/Tooltip.component";

const ShopItemAccounting = (props) => {
	const { shopItem } = props;

	// console.log(shopItem);

	return (
		<Tooltip show={false} shopItem={shopItem}>
			<div className='shop-item'>
				<div className='shop-item__info-container'>
					<div className='shop-item__info'>
						<label>Name:</label> <span>{shopItem.name}</span>
					</div>
					<div className='shop-item__info'>
						<label>Category:</label>
						<span> {shopItem.category.toUpperCase()}</span>
					</div>
					<div className='shop-item__info'>
						<label>How many sold: </label>
						<span>{shopItem.soldQuantity ? shopItem.soldQuantity : 0} psc</span>
					</div>
					<div className='shop-item__info'>
						<label>How much earned:</label>{" "}
						<span>{shopItem.sold ? shopItem.sold : 0} $</span>
					</div>
				</div>
			</div>
		</Tooltip>
	);
};

export default ShopItemAccounting;
