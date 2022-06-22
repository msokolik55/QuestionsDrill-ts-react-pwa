import { atom } from "recoil";

// TODO: make undefined safe
export const datasetIDAtom = atom<number>({
	key: "selectedDatasetID",
	default: 0,
});

// TODO: make undefined safe
export const questionIDAtom = atom<number>({
	key: "questionID",
	default: 0,
});

export const answeredWrongAtom = atom<number[]>({
	key: "answeredWrong",
	default: [],
});

export const answeredQuestionsAtom = atom<number[]>({
	key: "answeredQuestions",
	default: [],
});
