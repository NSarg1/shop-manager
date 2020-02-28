import React, { useState } from "react";
import RotatingCard from "../../components/RotatingCard/RotatingCard.component";
import data from "./shop.data";

const Shop = () => {
	const [hats] = useState(data.hats.items);

	return (
		<div className='shop'>
			<h2>Shop what you want and how much you want</h2>
			<div className='shop__collection'>
				{hats.map(({ id, ...otherProps }) => {
					return <RotatingCard key={id} {...otherProps} />;
				})}
			</div>
		</div>
	);
};

export default Shop;
