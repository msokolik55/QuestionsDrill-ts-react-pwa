import { selector } from "recoil";

// import datasets from "../data/datasets";
import { IDataset } from "../models/Dataset";
import { datasetIdAtom, datasetsAtom, questionIdAtom } from "./atom";

const getDataset = (get: any, datasetId: string): IDataset | undefined => {
	const datasets = get(datasetsAtom);
	return datasets.filter((dataset: any) => dataset.id === datasetId)[0];
};

export const datasetSelector = selector({
	key: "dataset",
	get({ get }) {
		const datasetId = get(datasetIdAtom);
		return getDataset(get, datasetId);
	},
});

export const datasetLengthSelector = selector({
	key: "datasetLength",
	get({ get }) {
		const datasetId = get(datasetIdAtom);
		return getDataset(get, datasetId)?.questions.length;
	},
});

export const questionSelector = selector({
	key: "question",
	get({ get }) {
		const datasetId = get(datasetIdAtom);
		const questionId = get(questionIdAtom);
		const question = getDataset(get, datasetId)?.questions[questionId];

		return question
			? {
					title: question.title,
					options: [...question.options].sort(
						() => Math.random() - 0.5
					),
			  }
			: undefined;
	},
});
