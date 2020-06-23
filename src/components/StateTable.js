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
						<td>Covid Score</td>
						<td>
							<NumberFormat
								value={state.healthScore}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={2}
							/>
						</td>
					</tr>
					<tr>
						<td>Total Cases</td>
						<td>
							<NumberFormat
								value={state.totalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</td>
					</tr>
					<tr>
						<td>Increase in Cases</td>
						<td>
							<NumberFormat
								value={state.caseIncrease}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={2}
								suffix={"%"}
							/>{" "}
						</td>
					</tr>
					<tr>
						<td>Peak Cases</td>
						<td>
							<NumberFormat
								value={state.peakCases}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							({state.peakCasesDate})
						</td>
					</tr>
					<tr>
						<td>Total Deaths</td>
						<td>
							<NumberFormat
								value={state.totalDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</td>
					</tr>
					<tr>
						<td>Increase in Deaths</td>
						<td>
							<NumberFormat
								value={state.deathIncrease}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={2}
								suffix={"%"}
							/>
						</td>
					</tr>
					<tr>
						<td>Peak Deaths</td>
						<td>
							<NumberFormat
								value={state.peakDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							({state.peakDeathsDate})
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default StateTable;
