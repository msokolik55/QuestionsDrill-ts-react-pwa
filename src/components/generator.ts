import { useSetRecoilState, useRecoilValue } from "recoil";
import {
	hasAnsweredAtom,
	answeredQuestionsAtom,
	questionIdAtom,
} from "../state/atom";
import { datasetLengthSelector } from "../state/selector";

const randomNumber = (maximum: number) => {
	return Math.floor(Math.random() * maximum);
};

export const GenerateQuestion = (id: number | undefined = undefined) => {
	let n: number;

	const setHasAnswered = useSetRecoilState(hasAnsweredAtom);

	const questionsCount = useRecoilValue(datasetLengthSelector);

	const answeredQuestions = useRecoilValue(answeredQuestionsAtom);
	const setQuestionId = useSetRecoilState(questionIdAtom);

	if (!questionsCount) return;

	if (id !== undefined) {
		n = (id + questionsCount) % questionsCount;
	} else {
		do {
			n = randomNumber(questionsCount);
		} while (
			answeredQuestions.length < questionsCount &&
			answeredQuestions.includes(n)
		);
	}

	setQuestionId(n);
	setHasAnswered(false);
};
