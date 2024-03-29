import { atom } from "recoil";
import { IDataset } from "../models/Dataset";
import { ISnackbarProps } from "../models/SnackbarProps";

export const datasetIdAtom = atom<string>({
	key: "selectedDatasetId",
	default: "",
});

export const datasetsAtom = atom<IDataset[]>({
	key: "datasets",
	default: [],
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

export const snackbarPropsAtom = atom<ISnackbarProps>({
	key: "snackbarProps",
	default: { open: false, severity: "success", text: "" },
});
