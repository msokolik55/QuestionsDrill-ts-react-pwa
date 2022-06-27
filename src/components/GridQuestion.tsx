import { SetStateAction } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { Button, Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import {
	answeredQuestionsAtom,
	answeredWrongAtom,
	hasAnsweredAtom,
	questionIdAtom,
} from "../state/atom";
import { datasetLengthSelector, questionSelector } from "../state/selector";

interface IGridQuestion {
	generateQuestion: (id?: number | undefined) => void;
}

const GridQuestion = (props: IGridQuestion) => {
	const [answeredWrong, setAnsweredWrong] = useRecoilState(answeredWrongAtom);
	const [answeredQuestions, setAnsweredQuestions] = useRecoilState(
		answeredQuestionsAtom
	);
	const questionsCount = useRecoilValue(datasetLengthSelector);

	const questionId = useRecoilValue(questionIdAtom);
	const question = useRecoilValue(questionSelector);

	const [hasAnswered, setHasAnswered] = useRecoilState(hasAnsweredAtom);

	const insertId = (
		items: number[],
		setter: (value: SetStateAction<number[]>) => void,
		id: number
	) => {
		if (!items.includes(id)) {
			setter([...items, id]);
		}
	};

	const checkAnswer = (id: number) => {
		if (!question?.options[id].isRight)
			insertId(answeredWrong, setAnsweredWrong, questionId);

		insertId(answeredQuestions, setAnsweredQuestions, questionId);

		setHasAnswered(true);
	};

	return (
		<Grid item sm={7} style={{ width: "100%" }}>
			<h4>
				{questionId + 1} / {questionsCount}
			</h4>
			<h4>{question?.title}</h4>
			{question?.options.map((opt, idx) => (
				<Button
					key={idx}
					style={{
						color: "black",
						backgroundColor: !hasAnswered
							? "#EFEFEF"
							: opt.isRight
							? "green"
							: "red",
						width: "100%",
						margin: "0.5rem 0 0.5rem 0",
						textTransform: "none",
					}}
					disabled={hasAnswered}
					onClick={() => checkAnswer(idx)}
				>
					{opt.title}
				</Button>
			))}

			<Grid container justifyContent="space-between">
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.generateQuestion(questionId - 1)}
				>
					<ArrowBack />
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.generateQuestion()}
				>
					Náhodná
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.generateQuestion(questionId + 1)}
				>
					<ArrowForward />
				</Button>
			</Grid>
		</Grid>
	);
};

export default GridQuestion;
