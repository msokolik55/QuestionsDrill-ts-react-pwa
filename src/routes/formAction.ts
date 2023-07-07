import { ActionFunction } from "react-router";
import { IDataset } from "../models/Dataset";

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData) as { [k: string]: string };
	const keys = Object.keys(data);

	const getQuestion = (question: string) => {
		return {
			title: data[question],
			options: getOptions(question),
		};
	};

	const getOptions = (question: string) => {
		return keys
			.filter((key) => key.match(`${question}-opt-`))
			.map((option) => {
				return { title: data[option], isRight: false };
			});
	};

	const dataset: IDataset = {
		id: data["name"],
		name: data["name"],
		questions: keys
			.filter((key) => key.match(/^qst-[0-9]+$/g))
			.map(getQuestion),
	};

	console.log(dataset);
	// const dataset = await fetch("/.netlify/functions/addDataset", {
	// 	method: "post",
	// 	body: "test",
	// });
	return { dataset };
};
