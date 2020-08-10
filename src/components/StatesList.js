import React, { useEffect, useState } from "react";
import StateTable from "./StateTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StatesList = ({ states }) => {
	const [statesData, setStatesData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const fips = states.map((s) => {
				return s.fips;
			});
			const result = await fetch("/api/states/summary", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ query: { fips: { $in: fips } } }),
			});
			const body = await result.json();
			await setStatesData(body);
		};
		fetchData();
	}, [states]);

	return (
		<>
			<Container fluid="md">
				{/* <Row>{items}</Row> */}
				<Row xs={1} md={3} lg={3}>
					{statesData.map((state, key) => (
						<Col sm key={key}>
							<StateTable state={state}></StateTable>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default StatesList;
