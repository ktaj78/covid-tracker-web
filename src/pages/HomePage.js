import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactbootStrapTable from "react-bootstrap-table-next";
import TableHelper from "../utilities/TableHelpers";
import { Link } from "react-router-dom";

const HomePage = (props) => {
	const [regressingStates, setRegressingStates] = useState([]);
	const [regressingCounties, setRegressingCounties] = useState([]);
	const [improvingCounties, setImprovingCounties] = useState([]);
	const [improvingStates, setImprovingStates] = useState([]);

	const stateFormatter = (cell, row) => {
		return <Link to={`/state/${row.fips}`}>{cell}</Link>;
	};

	const countyFormatter = (cell, row) => {
		return <Link to={`/county/${row.fips}`}>{cell}</Link>;
	};

	const rowFormatter = (row, rowIndex) => {
		let classes = null;
		if (row.healthScore > 1.2) classes = "text-danger";
		else if (row.healthScore > 0.8) classes = "text-warning";
		else if (row.healthScore < 0.8) classes = "text-success";
		return classes;
	};
	const stateColumns = [
		{
			dataField: "fips",
			text: "FIPS",
			hidden: true,
		},
		{
			dataField: "state",
			text: "State",
			formatter: stateFormatter,
			sort: true,
		},
		{
			dataField: "healthScore",
			text: "Covid Score",
			type: "number",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "caseIncrease",
			text: "% Increase in Cases",
			type: "number",
			formatter: TableHelper.percentFormatter,
			sort: true,
		},
		{
			dataField: "deathIncrease",
			text: "% Increase in Deaths",
			type: "number",
			formatter: TableHelper.percentFormatter,
			sort: true,
		},
		{
			dataField: "peakCasesDate",
			text: "Cases Peaked On",
			type: "date",
			sort: true,
		},
	];

	let countyColumns = [
		{
			dataField: "county",
			text: "County",
			formatter: countyFormatter,
			sort: true,
		},
	];

	countyColumns = countyColumns.concat(stateColumns);

	useEffect(() => {
		const fetchData = async () => {
			let counties = await fetch("/api/counties", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${props.auth.getAccessToken()}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: { healthScore: { $gt: 1 } },
					sort: { healthScore: -1, totalCases: -1 },
					limit: 30,
				}),
			});
			setRegressingCounties(await counties.json());

			counties = await fetch("/api/counties", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${props.auth.getAccessToken()}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: { healthScore: { $lt: 1 } },
					sort: { healthScore: 1, totalCases: 1 },
					limit: 30,
				}),
			});
			setImprovingCounties(await counties.json());

			let states = await fetch("/api/states", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${props.auth.getAccessToken()}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: { healthScore: { $gt: 1 } },
					sort: { healthScore: -1 },
					limit: 30,
				}),
			});
			setRegressingStates(await states.json());

			states = await fetch("/api/states", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${props.auth.getAccessToken()}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: { healthScore: { $lt: 1 } },
					sort: { healthScore: 1, totalCases: 1 },
					limit: 30,
				}),
			});
			setImprovingStates(await states.json());
		};
		fetchData();
	}, [props.auth]);
	return (
		<Container>
			<Row>
				<Col>
					<h4>States Trending Up ({regressingStates.length})</h4>
					<ReactbootStrapTable
						keyField="fips"
						data={regressingStates}
						columns={stateColumns}
						striped
						condensed
						height="120px"
						scrollTop={"Bottom"}
						rowClasses={rowFormatter}
					></ReactbootStrapTable>
				</Col>
				<Col>
					<h4>States Trending Down ({improvingStates.length})</h4>
					<ReactbootStrapTable
						keyField="fips"
						data={improvingStates}
						columns={stateColumns}
						striped
						condensed
						height="120px"
						scrollTop={"Bottom"}
						rowClasses={rowFormatter}
					></ReactbootStrapTable>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Counties Trending Up</h4>
					<ReactbootStrapTable
						keyField="fips"
						data={regressingCounties}
						columns={countyColumns}
						striped
						condensed
						height="120px"
						scrollTop={"Bottom"}
						rowClasses={rowFormatter}
					></ReactbootStrapTable>
				</Col>
				<Col>
					<h4>Counties Trending Down</h4>
					<ReactbootStrapTable
						keyField="fips"
						data={improvingCounties}
						columns={countyColumns}
						striped
						condensed
						height="120px"
						scrollTop={"Bottom"}
						rowClasses={rowFormatter}
					></ReactbootStrapTable>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
