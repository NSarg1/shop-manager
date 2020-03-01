import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card.component";

import { dataRef } from "../../firebase/firebase.references";

const Shop = () => {
	const [shopState, setShopState] = useState([]);

	useEffect(() => {
		dataRef.get().then((snapshot) => {
			const data = snapshot.docs.map((doc) => doc.data());
			setShopState(data.reverse());
		});
	}, []);

	return (
		<section className='shop'>
			<h2>Shop what you want and how much you want</h2>
			<div className='shop__collection'>
				{shopState.map(({ id, ...otherProps }) => {
					return <Card key={id} {...otherProps} />;
				})}
			</div>
		</section>
	);
};

export default Shop;
