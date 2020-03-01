import React from "react";

import ShopItem from "../ShopItem/ShopItem.component";

import { storageRef, dataRef, picPathRef } from "../../firebase/firebase.references";

const ContentArea = ({ data }) => {
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

	return (
		<div className='content-area'>
			{data.map((shopItem) => {
				return (
					<ShopItem
						key={shopItem.id}
						shopItem={shopItem}
						deleteClientFromServer={deleteClientFromServer}
					/>
				);
			})}
		</div>
	);
};

export default ContentArea;
