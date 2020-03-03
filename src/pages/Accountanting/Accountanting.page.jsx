//LIBRARIES
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//REFERENCES
import { dataRef } from "../../firebase/firebase.references";

import ShopItemAccounting from "../../components/shop-item-accounting/ShopItemAccounting.component";

const Accountanting = () => {
	const [data, setData] = useState({
		hats: [],
		sneakers: [],
		jackets: [],
	});

	useEffect(() => {
		const unsubscribeFormSnapshot = dataRef.onSnapshot(async (snapshot) => {
			const objData = { hats: [], sneakers: [], jackets: [] };
			const data = await snapshot.docs.map((doc) => doc.data());
			// eslint-disable-next-line
			data.reverse().map((item) => {
				objData[item.category].push(item);
			});

			setData(objData);
		});

		return () => {
			unsubscribeFormSnapshot();
		};
	}, []);

	return (
		<section className='accountanting'>
			<h2>Do your calculations</h2>

			{Object.keys(data).map((key, idx) => {
				return (
					<div key={idx}>
						<h3>
							{key.toUpperCase()} - Overall:{" "}
							{data[key].reduce((previous, current) => {
								return previous + current.sold;
							}, 0)}
							$
						</h3>
						<div className='content-area'>
							{data[key].map((item) => {
								return <ShopItemAccounting key={item.id} shopItem={item} />;
							})}
						</div>
					</div>
				);
			})}
		</section>
	);
};

// const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(Accountanting);
