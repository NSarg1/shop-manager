import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import uniqid from "uniqid";

const InputForm = ({ className, inputStyle, label, handleChange, Type, ...otherProps }) => {
	const id = uniqid();

	let InputFormStyles;
	if (className) {
		InputFormStyles = `input-form ${className}`;
	} else {
		InputFormStyles = "input-form";
	}

	let textareaStyles;
	if (inputStyle) {
		textareaStyles = `input-form __textarea ${inputStyle}`;
	} else {
		textareaStyles = "input-form __textarea";
	}
	let textStyles;
	if (inputStyle) {
		textStyles = `input-form__text ${inputStyle}`;
	} else {
		textStyles = "input-form__text";
	}

	return (
		<div className={InputFormStyles}>
			{label ? (
				<label htmlFor={id} className='input-form__label'>
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
