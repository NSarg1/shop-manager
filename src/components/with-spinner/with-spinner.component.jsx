import React from "react";
import { Spinner } from "react-bootstrap";

import { SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => {
	const Spin = ({ isLoading, inline, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<Spinner animation='grow' />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spin;
};

export default WithSpinner;
