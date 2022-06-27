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

// TODO: randomize options
export const questionSelector = selector({
	key: "question",
	get({ get }) {
		const datasetID = get(datasetIDAtom);
		const questionID = get(questionIDAtom);
		const question = datasets[datasetID].questions[questionID];

		return {
			title: question.title,
			options: [...question.options].sort(() => Math.random() - 0.5),
		};
	},
});
