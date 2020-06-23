import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

const CountiesSearch = ({
	name,
	label,
	onChange,
	onSearch,
	defaultOption,
	selected,
	defaultSelected,
	error,
	options,
}) => {
	return (
		<>
			<AsyncTypeahead
				id="select-typeahead"
				labelKey={label}
				filterBy={["county", "state"]}
				onChange={onChange}
				onSearch={onSearch}
				options={options}
				placeholder={defaultOption}
				defaultSelected={defaultSelected}
				selected={selected}
				renderMenuItemChildren={(option) => (
					<div>
						{option.county}, {option.state}
						<div>
							<small>
								{" Total Cases: "}
								<NumberFormat
									value={option.totalCases}
									displayType={"text"}
									thousandSeparator={true}
								/>
							</small>
						</div>
					</div>
				)}
				multiple
			/>
		</>
	);
};

CountiesSearch.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	defaultOption: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	error: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object),
};

export default CountiesSearch;
