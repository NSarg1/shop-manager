import React from "react";
import { Image } from "../styled-components/styled-components";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const ContentArea = ({ data }) => {
	return (
		<div className='content-area'>
			{data.map((item) => {
				return (
					<OverlayTrigger
						key={item.id}
						placement='top'
						overlay={
							<Tooltip id='popover-basic'>
								<Image imageUrl={item.imageUrl} width='18rem' height='20rem' />
							</Tooltip>
						}>
						<div className='content-area__item'>
							<div>
								<div>Item category: {item.category}</div>
								<div>Item price: {item.price}</div>
								<div>Item quantity: {item.quantity}</div>
								<div>Item name: {item.name}</div>
							</div>
						</div>
					</OverlayTrigger>
				);
			})}
		</div>
	);
};

export default ContentArea;
