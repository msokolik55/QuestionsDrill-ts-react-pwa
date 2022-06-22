import { Grid, Button } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { SetStateAction } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IQuestion } from "../models/Question";
import { answeredWrongAtom } from "../state/atom";
import { datasetLengthSelector } from "../state/selector";

interface IGridQuestion {
	questionID: number;
	question: IQuestion;
	hasAnswered: boolean;
	setHasAnswered: (answered: SetStateAction<boolean>) => void;

	answeredQuestions: number[];
	setAnsweredQuestions: (ids: SetStateAction<number[]>) => void;

	generateQuestion: (id?: number | undefined) => void;
}

const GridQuestion = (props: IGridQuestion) => {
	const [answeredWrong, setAnsweredWrong] = useRecoilState(answeredWrongAtom);
	const questionsCount = useRecoilValue(datasetLengthSelector);

	const insertID = (
		items: number[],
		setter: (value: SetStateAction<number[]>) => void,
		id: number
	) => {
		if (!items.includes(id)) {
			setter([...items, id]);
		}
	};

	const checkAnswer = (id: number) => {
		if (!props.question.options[id].isRight)
			insertID(answeredWrong, setAnsweredWrong, props.questionID);

		insertID(
			props.answeredQuestions,
			props.setAnsweredQuestions,
			props.questionID
		);

		props.setHasAnswered(true);
	};

	return (
		<Grid item sm={7} style={{ width: "100%" }}>
			<h4>
				{props.questionID + 1} / {questionsCount}
			</h4>
			<h4>{props.question.title}</h4>
			{props.question.options.map((opt, idx) => (
				<Button
					key={idx}
					style={{
						color: "black",
						backgroundColor: !props.hasAnswered
							? "#EFEFEF"
							: opt.isRight
							? "green"
							: "red",
						width: "100%",
						margin: "0.5rem 0 0.5rem 0",
						textTransform: "none",
					}}
					disabled={props.hasAnswered}
					onClick={() => checkAnswer(idx)}
				>
					{opt.title}
				</Button>
			))}

			<Grid container justifyContent="space-between">
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.generateQuestion(props.questionID - 1)}
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
					onClick={() => props.generateQuestion(props.questionID + 1)}
				>
					<ArrowForward />
				</Button>
			</Grid>
		</Grid>
	);
};

export default GridQuestion;
