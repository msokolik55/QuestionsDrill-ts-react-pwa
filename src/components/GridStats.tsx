import { useRecoilState } from "recoil";
import { Grid, Button } from "@material-ui/core";
import AccordionStats from "./AccordionStats";
import { answeredWrongAtom, answeredQuestionsAtom } from "../state/atom";

interface IGridStats {
	generateQuestion: (id: number | undefined) => void;
}

const GridStats = (props: IGridStats) => {
	const [answeredWrong, setAnsweredWrong] = useRecoilState(answeredWrongAtom);
	const [answeredQuestions, setAnsweredQuestions] = useRecoilState(
		answeredQuestionsAtom
	);

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
					// TODO: fix maximum to all questions length
					maximum={answeredWrong.length}
					generateQuestion={props.generateQuestion}
					keyLabel="answered-"
				/>
			</Grid>
		</Grid>
	);
};

export default GridStats;
