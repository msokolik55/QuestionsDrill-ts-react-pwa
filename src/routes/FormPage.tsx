import { Button, Stack, TextField } from "@mui/material";
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
			<TextField
				required={true}
				label="Dataset"
				name="name"
				size="small"
			/>

			<Button
				onClick={() =>
					setQuestions((old) => [...old, nextValue(questions)])
				}
			>
				Add question
			</Button>
			<br />
			<Stack spacing={2}>
				{questions.map((val) => (
					<Question
						key={`qst-${val}`}
						idx={val}
						setQuestions={setQuestions}
					/>
				))}
			</Stack>
			<Button type="submit">Add dataset</Button>
		</Form>
	);
};

export default FormPage;
