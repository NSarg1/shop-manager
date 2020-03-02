import React from "react";

import ShopItem from "../shop-item/ShopItem.component";

const ContentArea = ({ data }) => {
	return (
		<div className='content-area'>
			{data.map((shopItem) => {
				return <ShopItem key={shopItem.id} shopItem={shopItem} />;
			})}
		</div>
	);
};

export default ContentArea;
