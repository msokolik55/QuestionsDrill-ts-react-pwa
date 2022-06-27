import { atom } from "recoil";

// TODO: make undefined safe
// TODO: save last answered dataset
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

export const hasAnsweredAtom = atom<boolean>({
	key: "hasAnswered",
	default: false,
});

export const isDrawerOpenAtom = atom<boolean>({
	key: "isDrawerOpen",
	default: false,
});
