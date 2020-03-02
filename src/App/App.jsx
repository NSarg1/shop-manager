import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

// LAYOUT
import Header from "../layout/header/Header.layout";
import MainContainer from "../layout/main-container/MainContainer.layout";
import Footer from "../layout/footer/Footer.layout";

// PAGES
import Shop from "../pages/shop/Shop.page";
import AdminPanel from "../pages/admin-panel/AdminPanel.page";
import Accountanting from '../pages/accountanting/Accountanting.page'


function App() {
	return (
		<HashRouter basename='/'>
			<div className='App'>
				<Route component={Header} />
				<MainContainer>
					<Switch>
						<Route exact path='/shop' component={Shop} />
						<Route exact path='/admin' component={AdminPanel} />
						<Route exact path='/accounting' component={Accountanting} />

					</Switch>
				</MainContainer>
			</div>
			<Route component={Footer} />
		</HashRouter>
	);
}

export default App;
