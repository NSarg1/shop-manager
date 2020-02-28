import React from "react";
import Icon from "../Icon/Icon.component";

const Select = ({ children, onChange, opt, ...otherProps }) => {
	return (
		<div className='select'>
			<select
				onChange={onChange}
				{...otherProps}
				className='select__item'
				style={{ color: `${opt ? "#000" : "#8C8985" /*Gray color*/}` }}>
				{children}
			</select>
			<Icon name='chevron-down' className='select__icon' />
		</div>
	);
};

export default Select;
