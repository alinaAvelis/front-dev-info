"use client";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export type SelectorOption<TValue extends string = string> = {
	label: string;
	value: TValue;
};

type SelectorProps<TValue extends string = string> = {
	ariaLabel: string;
	disableScrollLock?: boolean;
	options: SelectorOption<TValue>[];
	value: TValue;
	onChange: (value: TValue) => void;
};

const Selector = <TValue extends string = string>({
	ariaLabel,
	disableScrollLock = false,
	options,
	value,
	onChange,
}: SelectorProps<TValue>) => {
	const handleChange = (event: SelectChangeEvent<TValue>) => {
		onChange(event.target.value as TValue);
	};

	return (
		<FormControl size="small" variant="standard">
			<Select
				aria-label={ariaLabel}
				value={value}
				onChange={handleChange}
				MenuProps={{ disableScrollLock }}
				disableUnderline
				sx={{
					fontSize: { xs: 14, md: 16 },
					fontWeight: 700,
					minWidth: 54,
				}}
			>
				{options.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Selector;
