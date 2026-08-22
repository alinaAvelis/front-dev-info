"use client";
import React, { useState } from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useClientDictionary from "@/dictionary/hooks/use-client-dictionary";

type MobileMenuProps = {
	menu:
		| Array<{
				classList: string;
				text: string;
				linkName: string;
				element: HTMLHeadingElement;
		  }>
		| null
		| undefined;
};

export default function MobileMenu({ menu }: MobileMenuProps) {
	const [expanded, setExpanded] = useState<string | false>(false);
	const text = useClientDictionary("general");
	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	const onClick = (element: HTMLHeadingElement) => {
		window.scrollTo({
			left: 0,
			top: element.offsetTop,
			behavior: "smooth",
		});
	};
	return (
		<Accordion
			className="menu_accordeon"
			expanded={expanded === "panel2"}
			onChange={handleChange("panel2")}
		>
			<AccordionSummary
				aria-controls="panel2bh-content"
				id="panel2bh-header"
				expandIcon={<ExpandMoreIcon />}
			>
				{text("contents")}
			</AccordionSummary>
			<AccordionDetails>
				<div className="menu">
					{menu?.map((item, i) => {
						return (
							<button
								key={i}
								className={`menu__item text-left ${item.classList}`}
								onClick={() => onClick(item.element)}
							>
								{item.text}
							</button>
						);
					})}
				</div>
			</AccordionDetails>
		</Accordion>
	);
}
