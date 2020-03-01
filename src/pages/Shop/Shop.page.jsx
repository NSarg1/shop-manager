import React, { useEffect } from "react";
import Card from "../../components/Card/Card.component";
import { connect } from "react-redux";

import { dataRef } from "../../firebase/firebase.references";

import { addData } from "../../redux/shop/shop.actions";

const Shop = ({ shopState, addData }) => {
	useEffect(() => {
		dataRef.get().then((snapshot) => {
			const data = snapshot.docs.map((doc) => doc.data());
			// setShopState(data.reverse());
			addData(data.reverse());
		});
	}, [addData]);

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

const mapStateToProps = ({ shop: { shopItems } }) => ({
	shopState: shopItems,
});

const mapDispatchToProps = (dispatch) => ({
	addData: (data) => dispatch(addData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
