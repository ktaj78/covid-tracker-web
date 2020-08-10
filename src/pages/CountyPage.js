import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountyTable from "../components/CountyTable";
import ReactbootStrapTable from "react-bootstrap-table-next";
import TableHelper from "../utilities/TableHelpers";

const CountyPage = ({ match }) => {
	// add useEffect to load county info with fips

	const [county, setCounty] = useState({});
	const [countyMetrics, setCountyMetrics] = useState([]);
	const fips = match.params.fips;
	console.log(fips);
	const columns = [
		{
			dataField: "date",
			text: "Date",
			sort: true,
		},
		{
			dataField: "cases",
			text: "Cases",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "cases7dayma",
			text: "7 Day average",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "cases30dayma",
			text: "30 Day average",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},

		{
			dataField: "deaths",
			text: "Deaths",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "deaths7dayma",
			text: "7 Day average",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "deaths30dayma",
			text: "30 Day average",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
	];
	const defaultSorted = [
		{
			dataField: "date",
			order: "desc",
		},
	];

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("/api/counties", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ query: { fips: { $in: [fips] } } }),
			});
			const body = await result.json();
			setCounty(body[0]);
			setCountyMetrics(body[0].metrics);
		};
		fetchData();
	}, [fips]);

	return (
		<Container fluid>
			<Row>
				<Col>
					<CountyTable county={county}></CountyTable>
				</Col>
			</Row>
			<Row height>
				<Col>
					<h4>Daily Metrics</h4>
					<ReactbootStrapTable
						keyField="date"
						data={countyMetrics}
						columns={columns}
						defaultSorted={defaultSorted}
						striped
						condensed
						height="120px"
						scrollTop={"Bottom"}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default CountyPage;
