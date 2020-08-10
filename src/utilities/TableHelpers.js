import React from "react";
import NumberFormat from "react-number-format";

const TableHelpers = () => {
	const numberFormatter = (cell, row) => {
		return (
			<NumberFormat
				value={cell}
				displayType={"text"}
				thousandSeparator={true}
				decimalScale={0}
			/>
		);
	};

	const decimalFormatter = (cell, row) => {
		return (
			<NumberFormat
				value={cell}
				displayType={"text"}
				thousandSeparator={true}
				decimalScale={1}
			/>
		);
	};

	const percentFormatter = (cell, row) => {
		return (
			<NumberFormat
				value={cell}
				displayType={"text"}
				thousandSeparator={true}
				decimalScale={0}
				suffix={"%"}
			/>
		);
	};
	return { numberFormatter, decimalFormatter, percentFormatter };
};

export default TableHelpers();
