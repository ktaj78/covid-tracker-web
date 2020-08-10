import React from "react";
import Table from "react-bootstrap/Table";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const CountyTable = ({ county }) => {
	// add useEffect to load county info with fips
	const decimalScale = 0
	return (
		<div
			style={
				({ "max-width": "200px" }, { "min-width": "100px" }, { margin: "10px" })
			}
		>
			<Link to={`/county/${county.fips}`}>
				<h4 style={{ float: "left" }}>
					{county.county}, {county.state}
				</h4>
			</Link>
			<Table striped bordered size="sm" style={{ width: "100%" }}>
				<tbody>
					<tr>
						<td>Covid Score</td>
						<td>
							<NumberFormat
								value={county.healthScore}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={decimalScale}
							/>
						</td>
					</tr>
					<tr>
						<td>Total Cases</td>
						<td>
							<NumberFormat
								value={county.totalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</td>
					</tr>
					<tr>
						<td>Increase in Cases</td>
						<td>
							<NumberFormat
								value={county.caseIncrease}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={decimalScale}
								suffix={"%"}
							/>{" "}
						</td>
					</tr>
					<tr>
						<td>Peak Cases</td>
						<td>
							<NumberFormat
								value={county.peakCases}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							({county.peakCasesDate})
						</td>
					</tr>
					<tr>
						<td>Total Deaths</td>
						<td>
							<NumberFormat
								value={county.totalDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</td>
					</tr>
					<tr>
						<td>Increase in Deaths</td>
						<td>
							<NumberFormat
								value={county.deathIncrease}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={decimalScale}
								suffix={"%"}
							/>
						</td>
					</tr>
					<tr>
						<td>Peak Deaths</td>
						<td>
							<NumberFormat
								value={county.peakDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							({county.peakDeathsDate})
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default CountyTable;
