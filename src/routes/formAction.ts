import { ActionFunction } from "react-router";
import { IDataset } from "../models/Dataset";
// import { redirect } from "react-router-dom";

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
		name: data["name"],
		questions: keys
			.filter((key) => key.match(/^qst-[0-9]+$/g))
			.map(getQuestion),
	};

	const res = await fetch("/.netlify/functions/addDataset", {
		method: "post",
		body: JSON.stringify(dataset),
	});

	return res;
	// return redirect(`/dataset/${dataset.id}`);
};
