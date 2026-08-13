"use client";
import { useMemo, useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ChartOptions
} from "chart.js";
import { Line } from "react-chartjs-2";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);


const AlgorithmSpeedLineChart = () => {
	const [items, setItems] = useState(5);
	const [error, setError] = useState("");
	const text = useClientDictionary("general");

 const options: ChartOptions<'line'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: text("algorithmGraph"),
		},
	},
};

	const labels = useMemo(() => {
		const array = [];
		for (let i = 1; i <= items; i++) {
			array?.push(i);
		}

		return array;
	}, [items]);

	const data = useMemo(() => {
		return {
			labels,
			datasets: [
				{
					label: "lgn",
					data: labels?.map((item) => Math.log(item)),
					borderColor: "#A4F22E",
					backgroundColor: "#A4F22E",
				},
				{
					label: "n",
					data: labels?.map((item) => item),
					borderColor: "#0487D9",
					backgroundColor: "#0487D9",
				},
				{
					label: "nlgn",
					data: labels?.map((item) => item * Math.log(item)),
					borderColor: "#F2B705",
					backgroundColor: "#F2B705",
				},
				{
					label: "n^2",
					data: labels?.map((item) => Math.pow(item, 2)),
					borderColor: "#D94032",
					backgroundColor: "#D94032",
				},
				{
					label: "2^n",
					data: labels?.map((item) => Math.pow(2, item)),
					borderColor: "#222640",
					backgroundColor: "#222640",
				},
			],
		};
	}, [labels]);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = +e.target.value;

		if (value > 1000) {
			setError(
				text("graphLimitError"),
			);
			return;
		} else {
			setError("");
			setItems(value);
		}
	};

	return (
		<div className="mt-5">
			<div className="w-full h-[300px] md:h-[500px]">
				<Line options={options} data={data} />
			</div>
			<div className="mt-2">
				<TextField
					value={items}
					type="number"
					fullWidth
					error={Boolean(error)}
					helperText={error ? error : ""}
					label={text("elementCount")}
					onChange={onInputChange}
				/>
			</div>
		</div>
	);
};

export default AlgorithmSpeedLineChart;
