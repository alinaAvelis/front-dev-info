"use client"
import React, { useState } from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type MobileMenuProps = {
	menu: Array<{
		classList: string;
		text: string;
		linkName: string;
	}> | null | undefined;
};

export default function MobileMenu({ menu }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

	return (
        
		<Accordion
			className="menu_accordeon md:hidden"
			expanded={expanded === "panel2"}
			onChange={handleChange("panel2")}
		>
			<AccordionSummary
				aria-controls="panel2bh-content"
				id="panel2bh-header"
				expandIcon={<ExpandMoreIcon />}
			>
				Содержание
			</AccordionSummary>
			<AccordionDetails>
				<div className="menu">
					{menu?.map((item, i) => {
						return (
							<Link
								key={i}
								className={`menu__item ${item.classList}`}
								href={`#${item.linkName}`}
							>
								{item.text}
							</Link>
						);
					})}
				</div>
			</AccordionDetails>
		</Accordion>
	);
}
