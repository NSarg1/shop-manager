import React from "react";
import Header from "../layout/Header/Header.layout";
import { Switch, Route, HashRouter } from "react-router-dom";

// LAYOUT
import MainContainer from "../layout/MainContainer/MainContainer.layout";
import Footer from "../layout/Footer/Footer.layout";

// PAGES
import Shop from "../pages/Shop/Shop.page";
import AdminPanel from "../pages/AdminPanel/AdminPanel.page";
import Accountanting from '../pages/Accountanting/Accountanting.page'


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
