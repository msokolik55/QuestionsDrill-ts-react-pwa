import { SetStateAction } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { Button } from "@mui/material";

import { IOption } from "../../models/Option";
import {
	answeredQuestionsAtom,
	answeredWrongAtom,
	hasAnsweredAtom,
	questionIdAtom,
} from "../../state/atom";
import { questionSelector } from "../../state/selector";

interface IOptionProps {
	option: IOption;
	index: number;
}

const Option = (props: IOptionProps) => {
	const [answeredWrong, setAnsweredWrong] = useRecoilState(answeredWrongAtom);
	const [answeredQuestions, setAnsweredQuestions] = useRecoilState(
		answeredQuestionsAtom
	);
	const [hasAnswered, setHasAnswered] = useRecoilState(hasAnsweredAtom);

	const questionId = useRecoilValue(questionIdAtom);
	const question = useRecoilValue(questionSelector);

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
		<Button
			style={{
				color: "black",
				backgroundColor: !hasAnswered
					? "#EFEFEF"
					: props.option.isRight
					? "green"
					: "red",
				width: "100%",
				margin: "0.5rem 0 0.5rem 0",
				textTransform: "none",
			}}
			disabled={hasAnswered}
			onClick={() => checkAnswer(props.index)}
		>
			{props.option.title}
		</Button>
	);
};

export default Option;
