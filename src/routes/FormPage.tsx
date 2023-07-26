import {
	Button,
	SpeedDial,
	SpeedDialAction,
	Stack,
	TextField,
	SpeedDialIcon,
} from "@mui/material";
import { Add, QuestionMark } from "@mui/icons-material";
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
			<SpeedDial
				ariaLabel="Speed dial for adding things"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}
			>
				<SpeedDialAction
					icon={<QuestionMark />}
					tooltipTitle="Add question"
					onClick={() =>
						setQuestions((old) => [...old, nextValue(questions)])
					}
				/>
				<SpeedDialAction icon={<Add />} tooltipTitle="Add dataset" />
			</SpeedDial>
		</Form>
	);
};

export default FormPage;
