//LIBRARIES
import React, { useState } from "react";
import moment from "moment";
import uniqid from "uniqid";

// COMPONENTS
import InputForm from "../../components/InputForm/InputForm";
import Select from "../../components//InputForm/Select";
import FileInput from "../../components/InputForm/FileInput";
import ButtonWithSpinner from "../../components/Button/ButtonWithSpinner";

//UTILITIES
import { storage, firestore } from "../../firebase/firebase.utils";

const AdminPanel = () => {
	const today = moment().format("MMMM Do YYYY, h:mm:ss");
	const [itemState, setItemState] = useState({
		category: "",
		name: "",
		imageUrl: "",
		price: "",
		id: uniqid(),
		lastChanged: today,
	});
	const [collectionID, setCollectionID] = useState(undefined);

	const [imageState, setImageState] = useState(undefined);
	const [progress, setProgress] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (event) => {
		event.preventDefault();
		let { value, name, files } = event.target;

		// Handle input value and store in React itemState
		if (name === "imageUrl") {
			setImageState(files[0]);
		} else {
			setItemState({
				...itemState,
				lastChanged: today,
				[name]: value,
			});
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!itemState.category) {
			alert("Select category");
			return;
		}
		setLoading(true);

		if (imageState) {
			const storageRef = storage.ref();
			const uploadedPicture = storageRef
				.child(`ns-shop/${itemState.category}/${collectionID}.jpg`)
				.put(imageState);

			uploadedPicture.on(
				"state_changed",
				(snapshot) => {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setProgress(Math.floor(progress));
				},
				(error) => {
					console.log(error);
				},
				async () => {
					const downloadURL = await uploadedPicture.snapshot.ref.getDownloadURL();
					// Store data in server
					await firestore
						.collection("shop")
						.doc("ns-shop")
						.collection(itemState.category)
						.doc(collectionID)
						.set({
							...itemState,
							imageUrl: downloadURL,
						});

					/*****************Set data to initial*******************/
					setProgress(0);
					setImageState(undefined);
					setLoading(false);
					setItemState({
						name: "",
						imageUrl: "",
						price: "",
						id: uniqid(),
						lastChanged: today,
					});
					/******************************************************/
				}
			);
		}
	};

	const handleSelectChange = (event) => {
		let { value } = event.target;
		console.log(itemState);
		setItemState({ ...itemState, category: value });

		switch (value) {
			case "hats":
				setCollectionID("FrrJXr4anwlLdgdd2sYe");
				break;
			case "jackets":
				setCollectionID("OlWCFCkBgYyXuzth9uAV");
				break;
			case "sneakers":
				setCollectionID("K74SfGlEUfQebQfDSEyG");
				break;
			default:
				alert("select category");
				return;
		}
	};

	return (
		<div className='admin-panel'>
			<h2>Control your store</h2>
			<div className='admin-panel__input'>
				<form onSubmit={handleSubmit} className='admin-panel__form'>
					<InputForm
						handleChange={handleChange}
						value={itemState.name}
						label="Item's name"
						type='text'
						name='name'
						required
					/>
					<InputForm
						handleChange={handleChange}
						value={itemState.price}
						label='Set price'
						type='number'
						name='price'
						placholder="Item's value"
						required
					/>
					<FileInput
						onChange={handleChange}
						progress={progress}
						picName={imageState}
						name='imageUrl'
						accept='image/png, image/jpeg'
					/>
					<Select onChange={handleSelectChange}>
						<option value='undefined'>-- Select item's category --</option>
						<option value='hats'>Hats</option>
						<option value='sneakers'>Sneakers</option>
						<option value='jackets'>Jackets</option>
					</Select>

					<ButtonWithSpinner type='submit' isLoading={loading}>
						Sumbit
					</ButtonWithSpinner>
				</form>
			</div>
		</div>
	);
};

export default AdminPanel;
