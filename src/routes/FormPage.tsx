import { Button } from "@mui/material";
import { useState } from "react";
import { Form } from "react-router-dom";
import Question from "../components/form/Question";
import { nextValue } from "../util";

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
