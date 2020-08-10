import React from "react";
import PropTypes from "prop-types";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import NumberFormat from "react-number-format";

const StatesSearch = ({
	name,
	label,
	onChange,
	onSearch,
	defaultOption,
	selected,
	error,
	isLoading,
	options,
}) => {
	return (
		<>
			<AsyncTypeahead
				id="select-typeahead"
				labelKey={label}
				onChange={onChange}
				onSearch={onSearch}
				options={options}
				placeholder={defaultOption}
				selected={selected}
				isLoading={isLoading}
				renderMenuItemChildren={(option) => (
					<div>
						{option.state}
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

StatesSearch.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	defaultOption: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	error: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object),
};

export default StatesSearch;
