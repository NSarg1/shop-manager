import "bootstrap/dist/css/bootstrap.min.css";
// import "normalize.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
