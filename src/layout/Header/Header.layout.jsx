import React from "react";

//COMPONENTS
import Navigation from "../../components/Navigation/Navigation.component";
import Button from "../../components/Button/Button.component";

// STYLED COMPONENTS
import { HeaderLayout, IconCart } from "./Header.styled";

const Header = (props) => {
	const { location, history } = props;
	const styles = ["header"];
	if (location.pathname !== "/") {
		styles.push("header--collapsed");
	}

	const handleClick = (address) => {
		history.push(address);
	};

	return (
		<HeaderLayout className={styles.join(" ")}>
			{location.pathname === "/shop" ? (
				<IconCart name='cart-outline' className='header__cart' />
			) : null}

			{location.pathname !== "/" ? (
				<Navigation {...props} />
			) : (
				<div className='header__main'>
					<h1>
						Shopify allows you <br /> to
					</h1>
					<div className='header__btn-container'>
						<Button
							className='grid-item grid-item--1 ns-btn--header'
							onClick={handleClick.bind(this, "shop")}>
							<span className='grid-item__text'>SHOP</span>
						</Button>
						<Button
							className='grid-item grid-item--2 ns-btn--header'
							onClick={handleClick.bind(this, "admin")}>
							<span className='grid-item__text'>CONTROL</span>
						</Button>
						<Button
							className='grid-item grid-item--3 ns-btn--header'
							onClick={handleClick.bind(this, "accounting")}>
							<span className='grid-item__text'>ACCOUNT</span>
						</Button>
					</div>
				</div>
			)}
		</HeaderLayout>
	);
};

export default Header;
