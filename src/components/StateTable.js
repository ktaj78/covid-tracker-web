import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const StateTable = ({ state }) => {
	// add useEffect to load state info with fips
	return (
		<div
			style={
				({ "max-width": "200px" }, { "min-width": "100px" }, { margin: "10px" })
			}
		>
			<Link to={`/state/${state.fips}`}>
				<h4 style={{ float: "left" }}>{state.state}</h4>
			</Link>
			<Table striped bordered size="sm" style={{ width: "100%" }}>
				<tbody>
					<tr>
						<td>
							Health Score:{" "}
							<NumberFormat
								value={state.healthScore}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={2}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={state.totalDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							total deaths
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={state.totalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							total cases
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={state.peakDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							peak deaths on {state.peakDeathsDate}
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={state.peakCases}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							peak cases on {state.peakCasesDate}
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default StateTable;
