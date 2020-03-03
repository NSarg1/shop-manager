import React from "react";

const Icon = ({ className, name, ...otherProps }) => {
	return (
		<div className={className ? `${className} icon` : "icon"}>
			<span className='icon__item' {...otherProps}>
				<ion-icon name={name} />
			</span>
		</div>
	);
};

export default Icon;
