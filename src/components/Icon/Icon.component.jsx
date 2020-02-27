import React from "react";

const Icon = ({ className, name, ...otherProps }) => {
	return (
		<div className={className ? `${className} icon` : "icon"} {...otherProps}>
			<ion-icon name={name} />
		</div>
	);
};

export default Icon;
