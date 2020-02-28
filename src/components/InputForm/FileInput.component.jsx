import React, { useRef, useState, useEffect } from "react";

const FileInput = ({ className, handleChange, picName, progress, placeholder, ...otherProps }) => {
	const fileInputRef = useRef();
	const [inputEl, setInputEl] = useState(undefined);

	useEffect(() => {
		const inputEl = fileInputRef.current;
		setInputEl(inputEl);
	}, []);

	let styles;
	if (className) {
		styles = `${className} file-input`;
	} else {
		styles = "file-input";
	}

	return (
		<div
			className={styles}
			onClick={() => inputEl.click()}
			style={{
				backgroundImage: `linear-gradient(90deg,rgba(41, 212, 41, 0.700) 0%,rgba(41, 212, 41, 0.500) ${progress}%,transparent 0%)`,
			}}>
			<input
				className='file-input__native-element'
				ref={fileInputRef}
				type='file'
				onChange={handleChange}
				{...otherProps}
			/>
			<div className='file-input__container'>
				{picName ? (
					<>
						<span>{picName.name}</span>
						{progress ? <span>{progress + "%"}</span> : null}
					</>
				) : (
					<span className='file-input__placeholder'>{placeholder}</span>
				)}
			</div>
		</div>
	);
};

export default FileInput;
