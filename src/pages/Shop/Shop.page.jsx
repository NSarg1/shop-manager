import React, { useState } from "react";
import Card from "../../components/Card/Card.component";
import data from "./shop.data";

const Shop = () => {
	const [hats] = useState(data.hats.items);

	return (
		<section className='shop'>
			<h2>Shop what you want and how much you want</h2>
			<div className='shop__collection'>
				{hats.map(({ id, ...otherProps }) => {
					return <Card key={id} {...otherProps} />;
				})}
			</div>
		</section>
	);
};

export default Shop;
