import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./scss/layout.scss";

import App from "./components/App/App";
import ItemsReducer from "./reducers/ItemsReducer";

ReactDOM.render(
	<Provider store={ItemsReducer}>
		<App />
	</Provider>,
	document.getElementById("app"));
