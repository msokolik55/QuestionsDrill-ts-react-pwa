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

interface IPropsOption {
	idx: number;
	questionIdx: number;
	setOptions: Dispatch<SetStateAction<number[]>>;
}

const Option = (props: IPropsOption) => {
	return (
		<>
			<Button
				onClick={() => {
					props.setOptions((curr) =>
						curr.filter((item) => item !== props.idx)
					);
				}}
			>
				X
			</Button>
			<label>Option:</label>
			<input name={`qst-${props.questionIdx}-opt-${props.idx}`} />
			<br />
		</>
	);
};

interface IPropsQuestion {
	idx: number;
	setQuestions: Dispatch<SetStateAction<number[]>>;
}

const Question = (props: IPropsQuestion) => {
	const [options, setOptions] = useState<number[]>([]);

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
			<Button
				onClick={() =>
					setOptions((old) => [...old, nextValue(options)])
				}
			>
				Add option
			</Button>
			<br />
			{options.map((val) => (
				<Option
					key={`qst-${props.idx}-opt-${val}`}
					idx={val}
					questionIdx={props.idx}
					setOptions={setOptions}
				/>
			))}

			<br />
		</>
	);
};

const last = (arr: any[]) => {
	return arr[arr.length - 1];
};

const nextValue = (arr: number[]) => {
	return arr.length > 0 ? last(arr) + 1 : 0;
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
