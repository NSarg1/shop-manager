import React, { useRef, useState, useEffect } from "react";

const FileInput = ({ className, handleChange, picName, progress, ...otherProps }) => {
	const fileInputRef = useRef();
	const [inputEl, setInputEl] = useState(undefined);

	useEffect(() => {
		const inputEl = fileInputRef.current;
		setInputEl(inputEl);
	}, []);

	return (
		<>
			<input
				ref={fileInputRef}
				style={{ display: "none" }}
				type='file'
				className='file-input--input'
				onChange={handleChange}
				{...otherProps}
			/>
			<div
				style={{
					backgroundImage: `linear-gradient(90deg,rgba(41, 212, 41, 0.700) 0%,rgba(41, 212, 41, 0.500) ${progress}%,transparent 0%)`,
					transition: "all 1s",
				}}
				className='file-input'
				onClick={() => inputEl.click()}>
				{picName ? (
					<>
						<span>{picName.name}</span>
						{progress ? <span>{progress + "%"}</span> : null}
					</>
				) : (
					<span>Select file...</span>
				)}
			</div>
		</>
	);
};

export default FileInput;
