import {
	Box,
	Button,
	Card,
	CardContent,
	Stack,
	TextField,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
import { Dispatch, SetStateAction, useState } from "react";
import Option from "./Option";
import { nextValue } from "../../util";
import DeleteButton from "./DeleteButton";

interface IPropsQuestion {
	idx: number;
	count: number;
	setQuestions: Dispatch<SetStateAction<number[]>>;
}

const Question = (props: IPropsQuestion) => {
	const init = [0];
	const [options, setOptions] = useState<number[]>(init);

	return (
		<Card>
			<CardContent>
				<Stack spacing={1}>
					<Box>
						<DeleteButton
							disabled={props.count <= 1}
							setter={props.setQuestions}
							value={props.idx}
							icon={<Clear />}
						/>
						<TextField
							aria-aria-label="Question text field"
							required={true}
							multiline={true}
							label="Question"
							name={`qst-${props.idx}`}
							size="small"
						/>
						<Button
							onClick={() =>
								setOptions((old) => [
									...old,
									nextValue(options),
								])
							}
						>
							Add option
						</Button>
					</Box>
					<Stack spacing={0.5}>
						{options.map((val) => (
							<Option
								key={`qst-${props.idx}-opt-${val}`}
								idx={val}
								count={options.length}
								questionIdx={props.idx}
								setOptions={setOptions}
							/>
						))}
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default Question;
