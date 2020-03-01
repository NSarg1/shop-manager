//LIBRARIES
import React, { useState, useEffect } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

import InputArea from "../../components/InputArea/InputArea.component";
import ContentArea from "../../components/ContentArea/ContentArea.component";

import { dataRef } from "../../firebase/firebase.references";

const AdminPanel = () => {
	const [fetchedData, setFetchedData] = useState([]);

	const [isAllSelected, setIsAllSelected] = useState(false);
	const [categoriesState, setCategoriesState] = useState([
		{ name: "hats", active: true },
		{ name: "jackets", active: false },
		{ name: "sneakers", active: false },
	]);

	useEffect(() => {
		const unsubscribeFromSnapshot = dataRef
			.where(
				"category",
				"in",
				categoriesState.map((el) => (el.active ? el.name : ""))
			)
			.onSnapshot(async (snapshot) => {
				const data = snapshot.docs.map((doc) => doc.data());
				setFetchedData(data.reverse());
			});
		return () => {
			unsubscribeFromSnapshot();
		};
	}, [categoriesState]);

	useEffect(() => {
		const isAllSelected = !categoriesState.find((item) => {
			return item.active === false;
		});
		setIsAllSelected(isAllSelected);
		console.log(isAllSelected);
	}, [categoriesState]);

	const handleClick = (ind) => {
		const categoriesStateCopy = [...categoriesState];

		categoriesStateCopy[ind].active = !categoriesState[ind].active;

		setCategoriesState(categoriesStateCopy);
	};

	const selectAllCategories = () => {
		const categoriesStateCopy = [...categoriesState];

		const isActive = !categoriesState.find((item) => {
			return item.active === false;
		});

		if (!isActive) {
			categoriesStateCopy.forEach((el) => {
				el.active = true;
			});
		} else {
			categoriesStateCopy.forEach((el) => {
				el.active = false;
			});
		}

		setCategoriesState(categoriesStateCopy);
	};

	return (
		<section className='admin-panel'>
			<h2>Control your store</h2>

			<div className='admin-panel__main'>
				<Accordion>
					<div className='admin-panel__accordion-item'>
						<Accordion.Toggle
							as={Card.Header}
							eventKey='0'
							className='admin-panel__toggle'>
							Add new items
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='0' className='admin-panel__collapse'>
							<InputArea />
						</Accordion.Collapse>
					</div>
				</Accordion>
				<div className='admin-panel__filter-buttons'>
					<Button
						onClick={selectAllCategories}
						variant='outline-dark'
						active={isAllSelected}>
						ALL CATEGORIES
					</Button>
					{categoriesState.map((btn, ind) => {
						return (
							<Button
								onClick={handleClick.bind(this, ind)}
								key={ind}
								variant='outline-dark'
								active={btn.active}>
								{btn.name.toUpperCase()}
							</Button>
						);
					})}

					{/* <Button variant='outline-primary' active={false}>
						Hats
					</Button>
					<Button variant='outline-primary' active={false}>
						Jackets
					</Button>
					<Button variant='outline-primary' active={false}>
						Sneakers
					</Button> */}
				</div>
				<ContentArea data={fetchedData} />
			</div>
		</section>
	);
};

export default AdminPanel;
