"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ChartData,
	ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

interface LineChartProps {
	data: ChartData<"line">;
	options?: ChartOptions<"line">;
	className?: string;
}

const LineChart = ({
	data,
	options,
	className = "w-full h-[300px] md:h-[500px]",
}: LineChartProps) => {
	return (
		<div className={className}>
			<Line options={options} data={data} />
		</div>
	);
};

export default LineChart;