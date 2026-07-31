import Tooltip from "@mui/material/Tooltip";
import { ReactElement } from "react";

type TooltipProps = {
	title: string;
	children: ReactElement;
};

export default function BasicTooltip({ children, title }: TooltipProps) {
	return <Tooltip title={title}>{children}</Tooltip>;
}
