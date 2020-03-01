import React, { useState } from "react";

const Icon = ({ className, name, hover, ...otherProps }) => {
	const [iconName, setIconName] = useState(name);

	return (
		<div className={className ? `${className} icon` : "icon"} {...otherProps}>
			<ion-icon
				name={iconName}
				onMouseEnter={setIconName.bind(this, hover)}
				onMouseLeave={setIconName.bind(this, name)}
			/>
		</div>
	);
};

export default Icon;
