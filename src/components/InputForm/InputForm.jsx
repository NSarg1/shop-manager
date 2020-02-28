import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import uniqid from "uniqid";

const InputForm = ({ className, inputStyle, label, handleChange, Type, ...otherProps }) => {
	const id = uniqid();

	let InputFormStyles;
	if (className) {
		InputFormStyles = `InputForm ${className}`;
	} else {
		InputFormStyles = "InputForm";
	}

	let textareaStyles;
	if (inputStyle) {
		textareaStyles = `InputForm__textarea ${inputStyle}`;
	} else {
		textareaStyles = "InputForm__textarea";
	}
	let textStyles;
	if (inputStyle) {
		textStyles = `InputForm__text ${inputStyle}`;
	} else {
		textStyles = "InputForm__text";
	}

	return (
		<div className={InputFormStyles}>
			{label ? (
				<label htmlFor={id} className='InputForm__label'>
					{label}
				</label>
			) : null}

			{Type === "textarea" ? (
				<TextareaAutosize className={textareaStyles} onChange={handleChange} {...otherProps} />
			) : (
				<input id={id} className={textStyles} onChange={handleChange} {...otherProps} />
			)}
		</div>
	);
};

export default InputForm;
