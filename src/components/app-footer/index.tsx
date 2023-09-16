import React, { useState, useEffect, useMemo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

type AppFooterProps = {};

const AppFooter = ({}: AppFooterProps) => {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	const getCurrentYear = useMemo(() => {
		return new Date().getFullYear();
	}, []);
	return (
		<footer className="flex justify-between items-center p-5 mt-10 bg-gray-300 ">
			<p>© {getCurrentYear} front-dev-info</p>
{/* 
			<div className="w-52">
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						Информация о сайте
					</AccordionSummary>
					<AccordionDetails>
						На этом сайте я делюсь информацией, которую использую в
						процессе работы. Посты пишутся больше в формате памяток,
						чем полномасштабных статей.
					</AccordionDetails>
				</Accordion>
			</div> */}

			<div className="header_contacts w-96 ">
				Если вы заметили ошибку или есть замечания, вы можете написать
				на почту:{" "}
				<strong>
					<a href="mailto:frontdevinfo@gmail.com">
						frontdevinfo@gmail.com
					</a>
				</strong>
				.
			</div>
		</footer>
	);
};

export default AppFooter;
