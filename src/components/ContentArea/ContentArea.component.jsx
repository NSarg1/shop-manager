import React, { useState } from "react";
import { Image } from "../styled-components/styled-components";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Icon from "../Icon/Icon.component";

import ShopItemModal from "../ShopItemModal/ShopItemModal.component";

import { storageRef, dataRef, picPathRef } from "../../firebase/firebase.references";

const ContentArea = ({ data }) => {
	const [editModeState, setEditModeState] = useState(false);

	const deleteClientFromServer = async (shopItem) => {
		try {
			// Delete client info from server
			await dataRef.doc(shopItem.id).delete();

			// Delete shopItem pic from server storage
			if (shopItem.imageUrl) {
				const picPath = storageRef.child(picPathRef(shopItem));
				await picPath.delete();
			}
		} catch (error) {
			console.log("Something went wrong", error);
		}
	};

	const handleClick = () => {
		setEditModeState(!editModeState);
	};

	return (
		<div className='content-area'>
			{data.map((shopItem) => {
				return (
					<div key={shopItem.id}>
						<OverlayTrigger
							placement='top'
							overlay={
								<Tooltip id='popover-basic'>
									<Image
										imageUrl={shopItem.imageUrl}
										width='18rem'
										height='20rem'
									/>
								</Tooltip>
							}>
							<div className='content-area__item'>
								<div className='content-area__info-container'>
									<div className='content-area__info'>
										<label>Item name:</label> <span>{shopItem.name}</span>
									</div>
									<div className='content-area__info'>
										<label>Item category:</label>
										<span> {shopItem.category}</span>
									</div>
									<div className='content-area__info'>
										<label>Item price:</label>
										<span> {shopItem.price}</span>
									</div>
									<div className='content-area__info'>
										<label>Item quantity:</label>{" "}
										<span> {shopItem.quantity}</span>
									</div>
								</div>
								<div className='content-area__icon-container'>
									<Icon
										onClick={deleteClientFromServer.bind(this, shopItem)}
										className='icon--remove'
										name='trash-outline'
										hover='trash'
									/>

									<Icon
										onClick={handleClick}
										className='icon--edit'
										name='create-outline'
										hover='create'
									/>
								</div>
							</div>
						</OverlayTrigger>
						<ShopItemModal
							shopItem={shopItem}
							show={editModeState}
							onHide={() => setEditModeState(false)}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ContentArea;
