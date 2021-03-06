import { selector } from "recoil";

import datasets from "../data/datasets";
import { IDataset } from "../models/Dataset";
import { datasetIdAtom, questionIdAtom } from "./atom";

const getDataset = (datasetId: string): IDataset | undefined => {
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
		return getDataset(datasetId)?.questions.length;
	},
});

export const questionSelector = selector({
	key: "question",
	get({ get }) {
		const datasetId = get(datasetIdAtom);
		const questionId = get(questionIdAtom);
		const question = getDataset(datasetId)?.questions[questionId];

		return question
			? {
					title: question.title,
					options: [...question.options].sort(() => Math.random() - 0.5),
			  }
			: undefined;
	},
});
