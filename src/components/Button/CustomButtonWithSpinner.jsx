import React from "react";
import WithSpinner from "./../with-spinner/with-spinner.component";

const CustomButtonWithSpinner = ({ className, children, ...otherProps }) => {
	return (
		<button {...otherProps} className={className ? `btn ${className}` : "btn"}>
			{children}
		</button>
	);
};

export default WithSpinner(CustomButtonWithSpinner);
