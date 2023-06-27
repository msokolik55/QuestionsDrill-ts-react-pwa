import { useRecoilState, useRecoilValue } from "recoil";

import { Button, Grid } from "@mui/material";

import { answeredQuestionsAtom, answeredWrongAtom } from "../../state/atom";
import { datasetLengthSelector } from "../../state/selector";
import AccordionStats from "./AccordionStats";
import { GenerateQuestion } from "../generator";

const GridStats = () => {
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
					generateQuestion={GenerateQuestion}
					keyLabel="wrong-"
				/>
				<AccordionStats
					title="Zodpovedané"
					items={answeredQuestions}
					maximum={questionsCount}
					generateQuestion={GenerateQuestion}
					keyLabel="answered-"
				/>
			</Grid>
		</Grid>
	);
};

export default GridStats;
