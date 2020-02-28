import React from "react";
import uniqid from "uniqid";

import { Nav, NavList } from "./Navigation.styled";

import Button from "../Button/Button.component";
// import Icon from "../../components/Icon/Icon.component";

const Navigation = (props) => {
	const { history, location } = props;

	const handleClick = (address) => {
		history.push(address);
	};

	const buttonClasses = "Navigation__link btn--link";

	const linksData = [
		{ address: "/shop", name: "SHOP" },
		{ address: "/admin", name: "ADMIN PANEL" },
		{ address: "/accounting", name: "ACCOUNTING" },
	];

	return (
		<Nav className='Navigation'>
			<div className='Header__logo'>
				<Button onClick={handleClick.bind(this, "/")} className={buttonClasses}>
					SHOPIFY
				</Button>
			</div>

			<NavList className='Navigation__list'>
				{linksData.map(({ address, name }) => {
					return (
						<li className='Navigation__item' key={uniqid()}>
							<Button
								onClick={handleClick.bind(this, address)}
								className={
									location.pathname === address
										? `${buttonClasses} btn--link-active`
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
