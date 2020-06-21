import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StateTable from "../components/StateTable";
import ReactbootStrapTable from "react-bootstrap-table-next";
import TableHelper from "../utilities/TableHelpers";

const StatePage = ({ match }) => {
	const [state, setState] = useState({});
	const [stateMetrics, setStateMetrics] = useState([]);
	const fips = match.params.fips;

	const columns = [
		{
			dataField: "date",
			text: "Date",
			type: "date",
			sort: true,
		},
		{
			dataField: "cases",
			text: "Cases",
			type: "number",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "cases7dayma",
			text: "7 Day average",
			type: "number",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "cases30dayma",
			text: "30 Day average",
			type: "number",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},

		{
			dataField: "deaths",
			text: "Deaths",
			type: "number",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "deaths7dayma",
			text: "7 Day average",
			type: "number",
			formatter: TableHelper.numberFormatter,
			sort: true,
		},
		{
			dataField: "deaths30dayma",
			text: "30 Day average",
			type: "number",
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
			const result = await fetch("/api/states/fipssearch", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ fips: [fips] }),
			});
			const body = await result.json();
			setState(body[0]);
			setStateMetrics(body[0].metrics);
		};
		fetchData();
	}, [fips]);

	return (
		<Container fluid>
			<Row>
				<Col>
					<StateTable state={state}></StateTable>
				</Col>
			</Row>
			<Row height>
				<Col>
					<h4>Daily Metrics</h4>
					<ReactbootStrapTable
						keyField="date"
						data={stateMetrics}
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

export default StatePage;
