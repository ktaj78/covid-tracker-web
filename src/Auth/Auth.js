import auth0 from "auth0-js";

const REDIRECT_ON_LOGIN = "redirect_on_login";
const LOGGED_IN = "logged_in";
let _idToken = null;
let _accessToken = null;
let _expiresAt = null;

export default class Auth {
	constructor(history) {
		this.history = history;
		this.userProfile = null;
		this.auth0 = new auth0.WebAuth({
			domain: process.env.REACT_APP_AUTH0_DOMAIN,
			clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
			redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
			audience: process.env.REACT_APP_AUTH0_AUDIENCE,
			responseType: "token id_token",
			scope: "openid profile email",
		});
	}

	login = () => {
		localStorage.setItem(
			REDIRECT_ON_LOGIN,
			JSON.stringify(this.history.location)
		);
		this.auth0.authorize();
	};

	handleAuthentication = () => {
		this.auth0.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				this.setSession(authResult);
				const redirectLocation =
					localStorage.getItem(REDIRECT_ON_LOGIN) === "undefined"
						? "/"
						: JSON.parse(localStorage.getItem(REDIRECT_ON_LOGIN));
				this.history.push(redirectLocation);
				localStorage.setItem(LOGGED_IN, "true");
			} else if (err) {
				this.history.push("/");
				alert(`Error: ${err.error}.  Check the console for further details.`);
				console.log(err);
			}

			localStorage.removeItem(REDIRECT_ON_LOGIN);
		});
	};

	setSession = (authResult) => {
		// set the time that the access token will expire
		// seconds * 1000 + the current epoch time
		_expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
		_accessToken = authResult.accessToken;
		_idToken = authResult.idToken;
		this.scheduleTokenRenewal();
	};

	isAuthenticated() {
		return new Date().getTime() < _expiresAt;
	}

	logout = () => {
		this.auth0.logout({
			ClientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
			returnTo: "http://localhost:3000",
		});
		localStorage.removeItem(LOGGED_IN);
	};

	getAccessToken = () => {
		if (!_accessToken) {
			throw new Error("No access token found.");
		}
		return _accessToken;
	};

	getProfile = (cb) => {
		if (this.userProfile) return cb(this.userProfile);
		this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
			if (profile) this.userProfile = profile;
			cb(profile, err);
		});
	};

	renewToken(cb) {
		if (localStorage.getItem(LOGGED_IN) !== "undefined") {
			this.auth0.checkSession({}, (err, result) => {
				if (err) {
					console.log(`Error: ${err.error} - ${err.error_description}.`);
				} else {
					this.setSession(result);
				}
				if (cb) cb(err, result);
			});
		}
	}

	scheduleTokenRenewal() {
		const delay = _expiresAt - Date.now();
		if (delay > 0) setTimeout(() => this.renewToken(), delay);
	}
}
