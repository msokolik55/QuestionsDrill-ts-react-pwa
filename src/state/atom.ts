import { atom } from "recoil";

// TODO: save last answered dataset
export const datasetIdAtom = atom<string>({
	key: "selectedDatasetId",
	default: "",
});

export const questionIdAtom = atom<number>({
	key: "questionId",
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
