import React from "react";

const CustomButton = ({ className, children, ...otherProps }) => {
	return (
		<button {...otherProps} className={className ? `ns-btn ${className}` : "ns-btn"}>
			<span className='ns-btn__text'>{children}</span>
		</button>
	);
};

export default CustomButton;
