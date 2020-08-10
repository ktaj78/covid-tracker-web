import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StatesSearch from "../components/StatesSearch";
import StatesList from "../components/StatesList";

const StatesPage = (props) => {
	// Full results to be sent to typeahead
	const [searchStates, setSearchStates] = useState([]);

	// Only a list of fips
	const [selectedStates, setSelectedStates] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			const result = await fetch("/api/user/states", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${props.auth.getAccessToken()}`,
					"Content-Type": "application/json",
				},
			});
			const body = await result.json();
			setSelectedStates(body["states"] || []);
		};
		fetchData();
		setIsLoading(false);
	}, [props.auth]);

	const handleChange = async (selected) => {
		setIsLoading(true);
		const result = await fetch("/api/user/states", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${props.auth.getAccessToken()}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ states: selected }),
		});
		const body = await result.json();
		setSelectedStates(body["value"]["states"] || []);
		setIsLoading(false);
	};

	const handleSearch = async (query) => {
		const result = await fetch("/api/states/search", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${props.auth.getAccessToken()}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ nameQuery: query }),
		});
		const body = await result.json();
		setSearchStates(body);
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<StatesSearch
							name="State Search"
							label="state"
							options={searchStates}
							defaultOption="Search States"
							selected={selectedStates}
							onChange={handleChange}
							onSearch={handleSearch}
							isLoading={isLoading}
						></StatesSearch>
					</Col>
				</Row>
				<Row>
					<Col>
						<StatesList states={selectedStates}></StatesList>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default StatesPage;
