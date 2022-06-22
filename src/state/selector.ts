import { selector } from "recoil";
import datasets from "../data/datasets";
import { datasetIDAtom, questionIDAtom } from "./atom";

export const datasetSelector = selector({
	key: "dataset",
	get({ get }) {
		const datasetID = get(datasetIDAtom);
		return datasets[datasetID];
	},
});

export const datasetLengthSelector = selector({
	key: "datasetLength",
	get({ get }) {
		const datasetID = get(datasetIDAtom);
		return datasets[datasetID].questions.length;
	},
});

export const questionSelector = selector({
	key: "question",
	get({ get }) {
		const datasetID = get(datasetIDAtom);
		const questionID = get(questionIDAtom);
		return datasets[datasetID].questions[questionID];
	},
});
