import React from "react";

const CustomButton = ({ className, children, ...otherProps }) => {
	return (
		<button {...otherProps} className={className ? `btn ${className}` : "btn"}>
			{children}
		</button>
	);
};

export default CustomButton;
