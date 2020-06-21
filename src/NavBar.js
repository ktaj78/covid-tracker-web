import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NavigationBar = (props) => {
	const { isAuthenticated, login, logout, getProfile } = props.auth;

	const [profile, setProfile] = useState(null);
	const [profileError, setProfileError] = useState("");

	useEffect(() => {
		loadUserProfile();
	});

	const loadUserProfile = () => {
		if (isAuthenticated()) {
			getProfile((profile, error) => {
				setProfile(profile);
				setProfileError(error);
			});
		}
	};

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>My Corona Tracker</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavLink
						exact
						to="/"
						className="d-inline p-2 bg-light text-dark"
						activeStyle={{
							fontWeight: "bold",
						}}
					>
						Trends
					</NavLink>
					{isAuthenticated() && (
						<>
							<NavLink
								to="/counties"
								className="d-inline p-2 bg-light text-dark"
								activeStyle={{
									fontWeight: "bold",
								}}
							>
								My Counties
							</NavLink>
							<NavLink
								to="/states"
								className="d-inline p-2 bg-light text-dark"
								activeStyle={{
									fontWeight: "bold",
								}}
							>
								My States
							</NavLink>
						</>
					)}
				</Nav>
				{profile ? (
					<Navbar.Text>Signed in as: {profile.name}</Navbar.Text>
				) : null}
				<Form inline>
					<Button onClick={isAuthenticated() ? logout : login}>
						{isAuthenticated() ? "Log Out" : "Log In"}
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
