import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { ExpandMore, ListAlt } from "@mui/icons-material";

interface IAccordionDrawerProps {
	title: string;
	children: JSX.Element[];
}

const AccordionDrawer = (props: IAccordionDrawerProps) => {
	return (
		<Accordion
			style={{ margin: "0em" }}
			disabled={props.children.length === 0}
		>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<ListItem>
					<ListItemIcon>
						<ListAlt />
					</ListItemIcon>
					<ListItemText primary={props.title.toUpperCase()} />
				</ListItem>
			</AccordionSummary>
			<AccordionDetails
				style={{
					display: "flex",
					flexDirection: "column",
					marginLeft: "1em",
				}}
			>
				{props.children}
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordionDrawer;
