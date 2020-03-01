import React, { useState } from "react";
import Icon from "../Icon/Icon.component";
import ShopItemModal from "../ShopItemModal/ShopItemModal.component";
import Tooltip from "../Tooltip/Tooltip.component";

const ShopItem = (props) => {
	const { shopItem, deleteClientFromServer } = props;
	const [editModeState, setEditModeState] = useState(false);

	const handleClick = () => {
		setEditModeState(!editModeState);
	};

	return (
		<Tooltip show={editModeState} shopItem={shopItem}>
			<div className='content-area__item'>
				<div className='content-area__info-container'>
					<div className='content-area__info'>
						<label>Name:</label> <span>{shopItem.name}</span>
					</div>
					<div className='content-area__info'>
						<label>Category:</label>
						<span> {shopItem.category}</span>
					</div>
					<div className='content-area__info'>
						<label>Price:</label>
						<span> {shopItem.price}</span>
					</div>
					<div className='content-area__info'>
						<label>Quantity:</label> <span> {shopItem.quantity}</span>
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
						onClick={handleClick.bind(this, shopItem)}
						className='icon--edit'
						name='create-outline'
						hover='create'
					/>
				</div>

				<ShopItemModal
					shopItem={shopItem}
					show={editModeState}
					onHide={() => setEditModeState(false)}
				/>
			</div>
		</Tooltip>
	);
};

export default ShopItem;
