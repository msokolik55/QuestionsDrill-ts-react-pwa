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

interface IPropsQuestion {
	idx: number;
	setQuestions: Dispatch<SetStateAction<number[]>>;
}

const Question = (props: IPropsQuestion) => {
	const [options, setOptions] = useState<number[]>([]);

	return (
		<Card>
			<CardContent>
				<Stack spacing={1}>
					<Box>
						<Button
							onClick={() => {
								props.setQuestions((curr) =>
									curr.filter((item) => item !== props.idx)
								);
							}}
						>
							<Clear />
						</Button>
						<TextField
							required={true}
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
