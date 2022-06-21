import { SetStateAction } from "react";
import { Grid, Button } from "@material-ui/core";
import AccordionStats from "./AccordionStats";

type setQuestions = (questions: SetStateAction<number[]>) => void;

interface IGridStats {
	answeredWrong: number[];
	setAnsweredWrong: setQuestions;
	answeredQuestions: number[];
	setAnsweredQuestions: setQuestions;
	generateQuestion: (id: number | undefined) => void;
}

const GridStats = (props: IGridStats) => {
	const resetAnswers = () => {
		props.setAnsweredWrong([]);
		props.setAnsweredQuestions([]);
	};

	return (
		<Grid item sm={5} style={{ flex: 1 }}>
			<Grid
				container
				direction="column"
				alignContent="center"
				style={{ paddingTop: "2rem", display: "flex" }}
			>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => resetAnswers()}
				>
					Reset
				</Button>

				<AccordionStats
					title="Zle zodpovedané"
					items={props.answeredWrong}
					maximum={props.answeredQuestions.length}
					generateQuestion={props.generateQuestion}
					keyLabel="wrong-"
				/>
				<AccordionStats
					title="Zodpovedané"
					items={props.answeredQuestions}
					maximum={props.answeredWrong.length}
					generateQuestion={props.generateQuestion}
					keyLabel="answered-"
				/>
			</Grid>
		</Grid>
	);
};

export default GridStats;
