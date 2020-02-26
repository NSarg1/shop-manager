import React from "react";

import { Link } from "react-router-dom";

import { Nav, NavList } from "./Navigation.styled";

const Navigation = ({ toggleHeader }) => {
	return (
		<Nav className='Navigation'>
			<div className='Header__logo'>
				<Link to='/' className='Navigation__link'>
					Shopify
				</Link>
			</div>
			
			<NavList className='Navigation__list'>
				<li onClick={toggleHeader} className='Navigation__item'>
					<Link to='/shop' className='Navigation__link'>
						Shop
					</Link>
				</li>
				<li className='Navigation__item'>
					<Link to='/admin' className='Navigation__link'>
						Admin panel
					</Link>
				</li>
				<li className='Navigation__item'>
					<Link to='/accounting' className='Navigation__link'>
						Accounting
					</Link>
				</li>
			</NavList>
		</Nav>
	);
};

export default Navigation;
