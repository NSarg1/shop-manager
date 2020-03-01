import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import moment from "moment";

import { dataRef } from "../../firebase/firebase.references";

const ShopItemModal = (props) => {
	const { shopItem, show, onHide } = props;

	
	const today = moment().format("MMMM Do YYYY, h:mm:ss");
	const [shopItemState, setShopItemState] = useState(shopItem);



	const handleChange = (event) => {
		event.preventDefault();
		let { value, name } = event.target;

		// Handle input value and store in React itemState
		setShopItemState({
			...shopItemState,
			lastChanged: today,
			[name]: value,
		});
	};

	const handleClick = () => {
		if (JSON.stringify(shopItemState) !== JSON.stringify(shopItem)) {
			//Update client in the Server
			dataRef.doc(shopItemState.id).update({ ...shopItemState, lastChanged: today });
		}

		//Disable edit mode
		onHide();
	};

	return (
		<Modal
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			show={show}
			onHide={onHide}>
			<Modal.Header closeButton>
				<h3>Edit your shop item</h3>
			</Modal.Header>
			<Modal.Body>
				<Form.Group>
					<Form.Label>Shop item name</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={shopItemState.name}
						type='text'
						placeholder='Shop item name'
						name='name'
					/>
					<br />
					<Form.Label>Shop item price </Form.Label>
					<Form.Control
						onChange={handleChange}
						value={shopItemState.price}
						type='number'
						placeholder='Shop item price'
						name='price'
					/>
					<br />
					<Form.Label>Shop item quantity</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={shopItemState.quantity}
						type='number'
						placeholder='Shop item quantity'
						name='quantity'
					/>
					<br />
				</Form.Group>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={onHide}>
					Close
				</Button>
				<Button variant='primary' onClick={handleClick}>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ShopItemModal;
