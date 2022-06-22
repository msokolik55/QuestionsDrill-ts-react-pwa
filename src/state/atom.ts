import { atom } from "recoil";

// TODO: make udnefined safe
export const datasetIDAtom = atom<number>({
	key: "selectedDatasetID",
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
