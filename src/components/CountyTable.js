import React from "react";
import Table from "react-bootstrap/Table";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const CountyTable = ({ county }) => {
	// add useEffect to load county info with fips
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
						<td>
							Health Score:{" "}
							<NumberFormat
								value={county.healthScore}
								displayType={"text"}
								thousandSeparator={true}
								decimalScale={2}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={county.totalDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							total deaths
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={county.totalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							total cases
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={county.peakDeaths}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							peak deaths on {county.peakDeathsDate}
						</td>
					</tr>
					<tr>
						<td>
							<NumberFormat
								value={county.peakCases}
								displayType={"text"}
								thousandSeparator={true}
							/>{" "}
							peak cases on {county.peakCasesDate}
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default CountyTable;
