import { selector } from "recoil";

import datasets from "../data/datasets";
import { datasetIdAtom, questionIdAtom } from "./atom";

const getDataset = (datasetId: string) => {
	return datasets.filter((dataset) => dataset.id === datasetId)[0];
};

export const datasetSelector = selector({
	key: "dataset",
	get({ get }) {
		const datasetId = get(datasetIdAtom);
		return getDataset(datasetId);
	},
});

export const datasetLengthSelector = selector({
	key: "datasetLength",
	get({ get }) {
		const datasetId = get(datasetIdAtom);
		return getDataset(datasetId).questions.length;
	},
});

// TODO: randomize options
export const questionSelector = selector({
	key: "question",
	get({ get }) {
		const datasetId = get(datasetIdAtom);
		const questionId = get(questionIdAtom);
		const question = getDataset(datasetId).questions[questionId];

		return {
			title: question.title,
			options: [...question.options].sort(() => Math.random() - 0.5),
		};
	},
});
