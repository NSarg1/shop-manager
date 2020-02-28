import React, { useState } from "react";


import moment from "moment";
import uniqid from "uniqid";
//UTILITIES
import { storage, firestore } from "../../firebase/firebase.utils";

// COMPONENTS
import InputForm from "../InputForm/InputForm.component";
import Select from "../Select/Select";
import FileInput from "../InputForm/FileInput.component";
import ButtonWithSpinner from "../Button/ButtonWithSpinner";

const InputArea = () => {
	const today = moment().format("MMMM Do YYYY, h:mm:ss");
	const [itemState, setItemState] = useState({
		category: "",
		name: "",
		imageUrl: "",
		price: "",
		id: uniqid(),
		lastChanged: today,
	});

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
		setLoading(true);

		if (imageState) {
			const storageRef = storage.ref();
			const uploadedPicture = storageRef
				.child(`codics/shop/${itemState.category}/${itemState.id}.jpg`)
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
						.collection("data")
						.doc("codics")
						.collection("shop")
						.doc(itemState.id)
						.set({
							...itemState,
							imageUrl: downloadURL,
						});

					/*****************Set data to initial*******************/
					setProgress(0);
					setImageState(undefined);
					setLoading(false);
					setItemState({
						category: undefined,
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
		setItemState({ ...itemState, category: value });
	};

	return (
		<div className='input-area'>
			<form onSubmit={handleSubmit} className='input-area__form'>
				<InputForm
					handleChange={handleChange}
					value={itemState.name}
					label='Name'
					placeholder='Blue hat'
					type='text'
					name='name'
					required
				/>
				<InputForm
					handleChange={handleChange}
					value={itemState.price}
					label='Price'
					type='number'
					name='price'
					placeholder='35'
					placholder="Item's value"
					required
				/>
				<Select onChange={handleSelectChange} opt={itemState.category} required>
					<option className='option-default' value='' selected={!itemState.category}>
						-- Select item's category --
					</option>
					<option className='select__option' value='hats'>
						Hats
					</option>
					<option className='select__option' value='sneakers'>
						Sneakers
					</option>
					<option className='select__option' value='jackets'>
						Jackets
					</option>
				</Select>
				<FileInput
					className='input-area__image'
					onChange={handleChange}
					progress={progress}
					picName={imageState}
					placeholder='Choose picture...'
					name='imageUrl'
					accept='image/png, image/jpeg'
					required
				/>
				<div className='input-area__submit'>
					<ButtonWithSpinner className='btn--submit' type='submit' isLoading={loading}>
						Sumbit
					</ButtonWithSpinner>
				</div>
			</form>
		</div>
	);
};

export default InputArea;
