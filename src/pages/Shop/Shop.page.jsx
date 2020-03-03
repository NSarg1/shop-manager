import React, { useEffect } from "react";
import ShopCard from "../../components/shop-card/ShopCard.component";
import { connect } from "react-redux";

import { dataRef } from "../../firebase/firebase.references";

import { addData } from "../../redux/shop/shop.actions";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const Shop = ({ shopState, addData, toggleCartHidden }) => {
	useEffect(() => {
		dataRef.get().then((snapshot) => {
			const data = snapshot.docs.map((doc) => doc.data());
			// setShopState(data.reverse());
			addData(data.reverse());
		});
		return () => {
			toggleCartHidden(true);
		};
	}, [addData, toggleCartHidden]);

	return (
		<section className='shop'>
			<h2>Shop what you want and how much you want</h2>
			<div className='shop__collection'>
				{shopState.map((item) => {
					// eslint-disable-next-line
					if (!item.id) return;
					return <ShopCard key={item.id} item={item} />;
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
	toggleCartHidden: (boolean) => dispatch(toggleCartHidden(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
