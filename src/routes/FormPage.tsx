import { Button } from "@mui/material";
import { useState } from "react";
import { ActionFunction, Form } from "react-router-dom";
import Question from "../components/form/Question";
import { nextValue } from "../util";
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

// TODO: design
// TODO: refactor
const FormPage = () => {
	const [questions, setQuestions] = useState<number[]>([]);

	return (
		<Form method="post">
			<label>Dataset name:</label>
			<input name="name" />

			<Button
				onClick={() =>
					setQuestions((old) => [...old, nextValue(questions)])
				}
			>
				Add question
			</Button>
			<br />
			{questions.map((val) => (
				<Question
					key={`qst-${val}`}
					idx={val}
					setQuestions={setQuestions}
				/>
			))}
			<Button type="submit">Add dataset</Button>
		</Form>
	);
};

export default FormPage;
