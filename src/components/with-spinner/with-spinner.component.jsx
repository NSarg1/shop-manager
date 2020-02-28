import React from "react";

import { SpinnerContainer, SpinnerOverlay, SpinnerOverlayInline } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, inline, ...otherProps }) => {
		return isLoading && inline ? (
			<SpinnerOverlayInline>
				<SpinnerContainer />
			</SpinnerOverlayInline>
		) : isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default WithSpinner;
