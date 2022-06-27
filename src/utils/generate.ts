import { useRecoilValue, useSetRecoilState } from "recoil";
import { answeredQuestionsAtom, questionIDAtom } from "../state/atom";
import { datasetLengthSelector } from "../state/selector";

const questionsCount = useRecoilValue(datasetLengthSelector);
const setQuestionID = useSetRecoilState(questionIDAtom);
const answeredQuestions = useRecoilValue(answeredQuestionsAtom);

const randomNumber = (maximum: number) => {
	return Math.floor(Math.random() * maximum);
};

export const generateQuestion = (id: number | undefined = undefined) => {
	let n: number;

	if (id !== undefined) {
		n = (id + questionsCount) % questionsCount;
	} else {
		if (answeredQuestions.length >= questionsCount) {
			n = randomNumber(questionsCount);
		} else {
			do {
				n = randomNumber(questionsCount);
			} while (answeredQuestions.includes(n));
		}
	}

	setQuestionID(n);
	setHasAnswered(false);
};
