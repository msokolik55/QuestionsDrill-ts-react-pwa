import {
	Accordion,
	AccordionSummary,
	Grid,
	Typography,
	AccordionDetails,
	Button,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

interface IPropsStats {
	title: string;
	items: number[];
	maximum: number;
	generateQuestion: (id?: number | undefined) => void;
	keyLabel: string;
}

const AccordionStats = ({
	title,
	items,
	maximum,
	generateQuestion,
	keyLabel,
}: IPropsStats) => {
	const sortedItems = [...items].sort((a, b) => a - b);

	return (
		<Accordion style={{ width: "100%" }}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Grid container justifyContent="space-between">
					<Typography variant="subtitle1">{title}</Typography>
					<Typography style={{ color: "grey" }}>
						{items.length + " / " + maximum}
					</Typography>
				</Grid>
			</AccordionSummary>
			<AccordionDetails style={{ flexWrap: "wrap" }}>
				{sortedItems.map((num) => (
					<Button
						key={keyLabel + num}
						onClick={() => generateQuestion(num)}
					>
						{num + 1}
					</Button>
				))}
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordionStats;
