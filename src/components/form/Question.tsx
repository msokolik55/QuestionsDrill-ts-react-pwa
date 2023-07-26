import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import Option from "./Option";
import { nextValue } from "../../util";

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
			<TextField
				required={true}
				label="Question"
				name={`qst-${props.idx}`}
				size="small"
			/>
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

export default Question;
