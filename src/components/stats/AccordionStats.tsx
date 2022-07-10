import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Grid,
	Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import { TGenerateQuestion } from "../../models/generateQuestion";

interface IStatsProps {
	title: string;
	items: number[];
	maximum: number | undefined;
	generateQuestion: TGenerateQuestion;
	keyLabel: string;
}

const AccordionStats = ({
	title,
	items,
	maximum,
	generateQuestion,
	keyLabel,
}: IStatsProps) => {
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
				{[...items]
					.sort((a, b) => a - b)
					.map((num) => (
						<Button key={keyLabel + num} onClick={() => generateQuestion(num)}>
							{num + 1}
						</Button>
					))}
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordionStats;
