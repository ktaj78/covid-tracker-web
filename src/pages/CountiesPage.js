import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountiesSearch from "../components/CountiesSearch";
import CountiesList from "../components/CountiesList";

const CountiesPage = (props) => {
	const [searchCounties, setSearchCounties] = useState([]);
	const [selectedCounties, setSelectedCounties] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("/api/user/counties", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${props.auth.getAccessToken()}`,
					"Content-Type": "application/json",
				},
			});
			const body = await result.json();

			setSelectedCounties(body["counties"]);
		};
		fetchData();
	}, [props.auth]);

	const handleChange = async (selected) => {
		setSelectedCounties(selected);
		await fetch("/api/user/counties", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${props.auth.getAccessToken()}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ counties: selected }),
		});
	};

	const handleSearch = async (query) => {
		const result = await fetch("/api/counties/search", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${props.auth.getAccessToken()}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ nameQuery: query }),
		});
		const body = await result.json();
		setSearchCounties(body);
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<CountiesSearch
							name="county"
							label="county"
							options={searchCounties}
							selected={selectedCounties}
							defaultOption="Search Counties"
							onChange={handleChange}
							onSearch={handleSearch}
						></CountiesSearch>
					</Col>
				</Row>
				<Row>
					<Col>
						<CountiesList counties={selectedCounties}></CountiesList>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CountiesPage;
