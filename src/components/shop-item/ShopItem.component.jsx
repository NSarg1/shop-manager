import React, { useState } from "react";
import Icon from "../icon/Icon.component";
import ItemEditModal from "../item-edit-modal/ItemEditModal.component";
import ItemRemoveModal from "../item-remove-modal/ItemRemoveModal.component";
import Tooltip from "../tooltip/Tooltip.component";

import { storageRef, dataRef, picPathRef } from "../../firebase/firebase.references";

const ShopItem = (props) => {
	const { shopItem } = props;
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

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

	const handleEditClick = () => {
		setShowEditModal(!showEditModal);
	};

	const handleDeleteClick = (boolean) => {
		if (boolean) {
			deleteClientFromServer(shopItem);
		} else {
			setShowDeleteModal(false);
		}
	};

	return (
		<Tooltip show={showEditModal || showDeleteModal} shopItem={shopItem}>
			<div className='shop-item'>
				<div className='shop-item__info-container'>
					<div className='shop-item__info'>
						<label>Name:</label> <span>{shopItem.name}</span>
					</div>
					<div className='shop-item__info'>
						<label>Category:</label>
						<span> {shopItem.category}</span>
					</div>
					<div className='shop-item__info'>
						<label>Price:</label>
						<span> {shopItem.price}</span>
					</div>
					<div className='shop-item__info'>
						<label>Quantity:</label> <span> {shopItem.remainedQuantity}</span>
					</div>
				</div>
				<div className='shop-item__icon-container'>
					<Icon
						onClick={setShowDeleteModal.bind(this, true)}
						className='icon--remove'
						name='trash-outline'
						hover='trash'
					/>

					<Icon
						onClick={handleEditClick}
						className='icon--edit'
						name='create-outline'
						hover='create'
					/>
				</div>
				<ItemRemoveModal show={showDeleteModal} handleClick={handleDeleteClick} />
				<ItemEditModal show={showEditModal} onHide={handleEditClick} shopItem={shopItem} />
			</div>
		</Tooltip>
	);
};

export default ShopItem;
