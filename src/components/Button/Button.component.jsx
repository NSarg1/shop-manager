import React from "react";

const CustomButton = ({ className, children, ...otherProps }) => {
	return (
		<button {...otherProps} className={className ? `btn ${className}` : "btn"}>
			<span className='btn__text'>{children}</span>
		</button>
	);
};

export default CustomButton;
