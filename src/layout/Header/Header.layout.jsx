import React from "react";

//COMPONENTS
import Navigation from "../../components/Navigation/Navigation.component";
import Button from "../../components/Button/Button.component";

import { HeaderLayout } from "./Header.styled";

const Header = (props) => {
	const { location, history } = props;
	const styles = ["header"];
	if (location.pathname !== "/") {
		styles.push("header--collapsed");
	}

	return (
		<HeaderLayout className={styles.join(" ")}>
			{location.pathname !== "/" ? (
				<Navigation />
			) : (
				<div className='header--main'>
					<h1>
						Shopify let's you <br /> to
					</h1>
					<div className='header__btn-container'>
						<Button className='grid-item grid-item--1' onClick={() => history.push("shop")}>
							<span className='grid-item__text'>SHOP</span>
						</Button>

						<Button className='grid-item grid-item--2' onClick={() => history.push("admin")}>
							<span className='grid-item__text'>CONTROL</span>
						</Button>
						<Button
							className='grid-item grid-item--3'
							onClick={() => history.push("accounting")}>
							<span className='grid-item__text'>ACCOUNT</span>
						</Button>
					</div>
				</div>
			)}
		</HeaderLayout>
	);
};

export default Header;
