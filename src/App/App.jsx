import React from "react";
import Header from "../layout/Header/Header.layout";
import { Switch, Route, HashRouter } from "react-router-dom";

// LAYOUT
import MainContent from "../layout/MainContent/MainContent.layout";
import Footer from "../layout/Footer/Footer.layout";

// PAGES
import Shop from "../pages/Shop/Shop.page";
import AdminPanel from "../pages/AdminPanel/AdminPanel.page";

function App() {
	return (
		<HashRouter basename='/'>
			<div className='App'>
				<Route component={Header} />
				<MainContent className='MainContent'>
					<Switch>
						<Route exact path='/shop' component={Shop} />
						<Route exact path='/admin' component={AdminPanel} />
					</Switch>
				</MainContent>
			</div>
			<Route component={Footer} />
		</HashRouter>
	);
}

export default App;
