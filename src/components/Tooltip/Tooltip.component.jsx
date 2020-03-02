import React from "react";

import { Image } from "../styled-components/styled-components";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const CustomTooltip = (props) => {
	const { children, show, shopItem } = props;

	if (show === false) {
		return (
			<OverlayTrigger
				{...props}
				placement='top'
				overlay={
					<Tooltip id='popover-basic'>
						<Image imageUrl={shopItem.imageUrl} width='18rem' height='20rem' />
					</Tooltip>
				}>
				{children}
			</OverlayTrigger>
		);
	} else {
		return children;
	}
};

export default CustomTooltip;
