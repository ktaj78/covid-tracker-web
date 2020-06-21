import React, { useEffect, useState } from "react";
import CountyTable from "./CountyTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CountiesList = ({ counties }) => {
	const [countiesData, setCountiesData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const fips = counties.map((c) => {
				return c.fips;
			});
			const result = await fetch("/api/counties/fipssearch", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ fips: fips }),
			});
			const body = await result.json();
			await setCountiesData(body);
		};
		fetchData();
	}, [counties]);

	return (
		<>
			<Container fluid="md">
				{/* <Row>{items}</Row> */}
				<Row xs={1} md={3} lg={3}>
					{countiesData.map((county, key) => (
						<Col sm key={key}>
							<CountyTable county={county}></CountyTable>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default CountiesList;
