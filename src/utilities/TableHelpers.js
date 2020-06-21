import React from "react";
import NumberFormat from "react-number-format";

const TableHelpers = () => {
	const numberFormatter = (cell, row) => {
		return (
			<NumberFormat
				value={cell}
				displayType={"text"}
				thousandSeparator={true}
				decimalScale={2}
			/>
		);
	};

	const percentFormatter = (cell, row) => {
		return (
			<NumberFormat
				value={cell}
				displayType={"text"}
				thousandSeparator={true}
				decimalScale={2}
				suffix={"%"}
			/>
		);
	};
	return { numberFormatter, percentFormatter };
};

export default TableHelpers();
