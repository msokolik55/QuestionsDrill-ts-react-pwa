import { useRecoilState, useRecoilValue } from "recoil";

import { Button, Grid } from "@material-ui/core";

import { answeredQuestionsAtom, answeredWrongAtom } from "../../state/atom";
import { datasetLengthSelector } from "../../state/selector";
import AccordionStats from "./AccordionStats";

interface IGridStatsProps {
	generateQuestion: (id: number | undefined) => void;
}

const GridStats = (props: IGridStatsProps) => {
	const [answeredWrong, setAnsweredWrong] = useRecoilState(answeredWrongAtom);
	const [answeredQuestions, setAnsweredQuestions] = useRecoilState(
		answeredQuestionsAtom
	);

	const questionsCount = useRecoilValue(datasetLengthSelector);

	const resetAnswers = () => {
		setAnsweredWrong([]);
		setAnsweredQuestions([]);
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
					items={answeredWrong}
					maximum={answeredQuestions.length}
					generateQuestion={props.generateQuestion}
					keyLabel="wrong-"
				/>
				<AccordionStats
					title="Zodpovedané"
					items={answeredQuestions}
					maximum={questionsCount}
					generateQuestion={props.generateQuestion}
					keyLabel="answered-"
				/>
			</Grid>
		</Grid>
	);
};

export default GridStats;
