import { useState, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";

export interface MenuAction {
	id: string;
	label: string;
	icon?: ReactNode;
	disabled?: boolean;
	href: string;
}

interface ActionMenuProps {
	buttonText: string;
	items: MenuAction[];
	disabled?: boolean;
}
const NavigationMenu = ({ buttonText, items, disabled }: ActionMenuProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleItemClick = () => {
		handleClose();
	};

	return (
		<>
			<button
				onClick={handleOpen}
				disabled={disabled}
				className={`button button--no_styles text-base md:text-lg`}
			>
				{buttonText}
			</button>

			<Menu
				anchorEl={anchorEl}
				disableScrollLock={true}
				open={open}
				onClose={handleClose}
				className="max-h-100"
			>
				{items.map((item) => (
					<MenuItem
						key={item.id}
						onClick={() => handleItemClick()}
						disabled={item.disabled}
					>
						{item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
						<Link href={item.href}>{item.label}</Link>
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default NavigationMenu;
