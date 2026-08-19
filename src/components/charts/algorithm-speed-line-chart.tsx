"use client";

import { ChangeEvent, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import { ChartOptions } from "chart.js";

import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";
import LineChart from "@/shared/ui/line-chart";

const AlgorithmSpeedLineChart = () => {
	const [items, setItems] = useState("5");
	const [error, setError] = useState("");

	const text = useClientDictionary("general");

	const labels = useMemo(
		() => {
			const numberedItems = +items;
			const data = numberedItems > 1000 ? 1000 : numberedItems
			return Array.from({ length: data }, (_, index) => index + 1)
		},
		[items],
	);

	const data = useMemo(
		() => ({
			labels,
			datasets: [
				{
					label: "lgn",
					data: labels.map((item) => Math.log(item)),
					borderColor: "#A4F22E",
					backgroundColor: "#A4F22E",
				},
				{
					label: "n",
					data: labels,
					borderColor: "#0487D9",
					backgroundColor: "#0487D9",
				},
				{
					label: "nlgn",
					data: labels.map((item) => item * Math.log(item)),
					borderColor: "#F2B705",
					backgroundColor: "#F2B705",
				},
				{
					label: "n^2",
					data: labels.map((item) => Math.pow(item, 2)),
					borderColor: "#D94032",
					backgroundColor: "#D94032",
				},
				{
					label: "2^n",
					data: labels.map((item) => Math.pow(2, item)),
					borderColor: "#222640",
					backgroundColor: "#222640",
				},
			],
		}),
		[labels],
	);

	const options: ChartOptions<"line"> = useMemo(
		() => ({
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
		}),
		[text],
	);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setItems(value);
		if (Number(value) > 1000) {
			setError(text("graphLimitError"));
		} else {
			setError("");
		}
	};

	return (
		<div className="mt-5">
			<LineChart data={data} options={options} />

			<div className="mt-2">
				<TextField
					value={items}
					type="number"
					fullWidth
					error={Boolean(error)}
					helperText={error || ""}
					label={text("elementCount")}
					onChange={onInputChange}
				/>
			</div>
		</div>
	);
};

export default AlgorithmSpeedLineChart;
