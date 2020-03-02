import React, { useState } from "react";

import moment from "moment";
import uniqid from "uniqid";
//UTILITIES
import { storageRef, dataRef, picPathRef } from "../../firebase/firebase.references";

// COMPONENTS
import InputForm from "../input-form/InputForm.component";
import Select from "../select/Select";
import FileInput from "../input-form/FileInput.component";
import ButtonWithSpinner from "../button/ButtonWithSpinner";

const InputArea = () => {
	const today = moment().format("MMMM Do YYYY, h:mm:ss");
	const [itemState, setItemState] = useState({
		category: "",
		name: "",
		imageUrl: "",
		quantity: "",
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
			const uploadedPicture = storageRef.child(picPathRef(itemState)).put(imageState);

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
					await dataRef.doc(itemState.id).set({
						...itemState,
						imageUrl: downloadURL,
					});

					/*****************Set data to initial*******************/
					setProgress(0);
					setImageState(undefined);
					setLoading(false);
					setItemState({
						category: "",
						name: "",
						imageUrl: "",
						quantity: "",
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
					required
				/>
				<Select
					onChange={handleSelectChange}
					value={itemState.category}
					defaultOption={itemState.category}
					required>
					<option className='option-default' value=''>
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
				<InputForm
					handleChange={handleChange}
					value={itemState.quantity}
					placeholder='Quantity'
					type='number'
					name='quantity'
					required
				/>
				<div className='input-area__submit'>
					<ButtonWithSpinner
						block
						variant='outline-dark'
						type='submit'
						isLoading={loading}>
						Sumbit
					</ButtonWithSpinner>
				</div>
			</form>
		</div>
	);
};

export default InputArea;
