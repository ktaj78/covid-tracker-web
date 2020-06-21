import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import "./index.css";
import App from "./App";
import "jquery/dist/jquery.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route component={App} />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
