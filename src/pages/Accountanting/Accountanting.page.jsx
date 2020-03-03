//LIBRARIES
import React, { useEffect, useState } from "react";

//REFERENCES
import { dataRef } from "../../firebase/firebase.references";

//COMPONENTS
import { Accordion, Card } from "react-bootstrap";
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

			<Accordion defaultActiveKey={0}>
				{Object.keys(data).map((key, idx) => {
					return (
						<div key={idx}>
							<Accordion.Toggle
								key={idx}
								as={Card.Header}
								eventKey={idx}
								className='admin-panel__toggle'>
								{key.toUpperCase()} - Overall:{" "}
								{data[key].reduce((previous, current) => {
									return previous + current.sold;
								}, 0)}
								$
							</Accordion.Toggle>
							<Accordion.Collapse eventKey={idx} className='admin-panel__collapse'>
								<div className='content-area'>
									{data[key].map((item) => {
										return <ShopItemAccounting key={item.id} shopItem={item} />;
									})}
								</div>
							</Accordion.Collapse>
						</div>
					);
				})}
			</Accordion>
		</section>
	);
};

export default Accountanting;
