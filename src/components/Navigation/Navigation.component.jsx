import React from "react";
import uniqid from "uniqid";

import { Nav, NavList } from "./Navigation.styled";

import Button from "../button/Button.component";

// import Icon from "../../components/Icon/Icon.component";

import Logo from "../../sass/assets/logo.png";
import { Image } from "../styled-components/styled-components";

const Navigation = (props) => {
	const { history, location } = props;

	const handleClick = (address) => {
		history.push(address);
	};

	const buttonClasses = "navigation__link ns-btn--link";

	const linksData = [
		{ address: "/shop", name: "SHOP" },
		{ address: "/admin", name: "ADMIN PANEL" },
		{ address: "/accounting", name: "ACCOUNTING" },
	];

	return (
		<Nav className='navigation'>
			<div className='Header__logo' onClick={handleClick.bind(this, "/")}>
				<Image imageUrl={Logo} height='3rem' width='8rem' />
			</div>

			<NavList className='navigation__list'>
				{linksData.map(({ address, name }) => {
					return (
						<li className='navigation__item' key={uniqid()}>
							<Button
								onClick={handleClick.bind(this, address)}
								className={
									location.pathname === address
										? `${buttonClasses} ns-btn--link-active`
										: buttonClasses
								}>
								{name}
							</Button>
						</li>
					);
				})}
			</NavList>
		</Nav>
	);
};

export default Navigation;
