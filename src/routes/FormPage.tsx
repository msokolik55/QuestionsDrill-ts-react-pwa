import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "react-router-dom";

export const action = async () => {
	const dataset = null;
	// const dataset = await fetch("/.netlify/functions/addDataset", {
	// 	method: "post",
	// 	body: "test",
	// });
	return { dataset };
};

interface IPropsQuestion {
	idx: number;
	setQuestions: Dispatch<SetStateAction<number[]>>;
}

const Question = (props: IPropsQuestion) => {
	return (
		<>
			<Button
				onClick={() => {
					props.setQuestions((curr) =>
						curr.filter((item) => item !== props.idx)
					);
				}}
			>
				X
			</Button>
			<label>Question name:</label>
			<input name={`qst-${props.idx}`} />
			<br />
		</>
	);
};

// TODO: design
const FormPage = () => {
	const [questions, setQuestions] = useState<number[]>([]);

	return (
		<Form method="post">
			<label>Dataset name:</label>
			<input name="name" />

			<Button
				onClick={() =>
					setQuestions((old) => [
						...old,
						questions.length > 0
							? questions[questions.length - 1] + 1
							: 0,
					])
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
