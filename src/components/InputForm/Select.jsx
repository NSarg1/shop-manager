import React from "react";

import { SelectOverlay, SelectItem, SelectIcon } from "./InputForm.styled";

const Select = ({ children, onChange }) => {
	return (
		<SelectOverlay className='select'>
			<SelectItem onChange={onChange} className='select__item'>
				{children}
			</SelectItem>
			<SelectIcon name='chevron-down' />
		</SelectOverlay>
	);
};

export default Select;
