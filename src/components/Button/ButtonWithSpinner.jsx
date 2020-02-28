import React from "react";
import WithSpinner from "../with-spinner/with-spinner.component";
import { Button } from "react-bootstrap";

const CustomButtonWithSpinner = ({ children, ...otherProps }) => {
	return <Button {...otherProps}>{children}</Button>;
};

export default WithSpinner(CustomButtonWithSpinner);
