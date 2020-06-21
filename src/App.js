import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./NavBar";
import "./App.css";
import CountiesPage from "./pages/CountiesPage";
import Auth from "./Auth/Auth";
import Callback from "./pages/Callback";
import StatesPage from "./pages/StatesPage";
import PrivateRoute from "./components/PrivateRoute";
import AuthContext from "./components/AuthContext";
import CountyPage from "./pages/CountyPage";
import StatePage from "./pages/StatePage";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			auth: new Auth(this.props.history),
			tokenRenewalComplete: false,
		};
	}

	componentDidMount() {
		this.state.auth.renewToken(() =>
			this.setState({ tokenRenewalComplete: true })
		);
	}

	render() {
		const { auth } = this.state;
		if (!this.state.tokenRenewalComplete) return "Loading...";
		return (
			<AuthContext.Provider value={auth}>
				<NavigationBar auth={auth} />
				<div id="page-body">
					<Switch>
						<Route
							path="/"
							render={(props) => <HomePage auth={auth} {...props} />}
							exact
						/>
						<Route
							path="/callback"
							render={(props) => <Callback auth={auth} {...props} />}
						/>
						<PrivateRoute path="/counties" component={CountiesPage} exact />
						<PrivateRoute path="/states" component={StatesPage} exact />
						<PrivateRoute path="/county/:fips" component={CountyPage} exact />
						<PrivateRoute path="/state/:fips" component={StatePage} exact />
					</Switch>
				</div>
			</AuthContext.Provider>
		);
	}
}

export default App;
