import React from "react";

//COMPONENTS
import Navigation from "../../components/navigation/Navigation.component";
import Button from "../../components/button/Button.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";

// STYLED COMPONENTS

const Header = (props) => {
	const { location, history, hidden } = props;
	const styles = ["header"];
	if (location.pathname !== "/") {
		styles.push("header--collapsed");
	}

	const handleClick = (address) => {
		history.push(address);
	};

	return (
		<header className={styles.join(" ")}>
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
			{location.pathname === "/shop" ? <CartIcon /> : null}

			{hidden ? null : <CartDropdown />}
		</header>
	);
};

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
