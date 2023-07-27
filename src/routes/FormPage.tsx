import {
	Button,
	SpeedDial,
	SpeedDialAction,
	Stack,
	TextField,
	SpeedDialIcon,
	Typography,
} from "@mui/material";
import { Add, QuestionMark } from "@mui/icons-material";
import { useState } from "react";
import { Form } from "react-router-dom";
import Question from "../components/form/Question";
import { nextValue } from "../util";
import { useSetRecoilState } from "recoil";
import { snackbarPropsAtom } from "../state/atom";

// TODO: design
// TODO: refactor
const FormPage = () => {
	const init = [0];
	const [questions, setQuestions] = useState<number[]>(init);

	const setSnackbarProps = useSetRecoilState(snackbarPropsAtom);

	return (
		<>
			<Typography variant="h4" component="h1">
				Dataset
			</Typography>
			<Form
				method="post"
				onSubmit={() =>
					setSnackbarProps(() => {
						return {
							open: true,
							severity: "success",
							text: "Dataset successfully added.",
						};
					})
				}
			>
				<TextField
					aria-label="Dataset name text field"
					required={true}
					label="Name"
					name="name"
					size="small"
				/>
				<Stack spacing={2}>
					{questions.map((val) => (
						<Question
							key={`qst-${val}`}
							idx={val}
							count={questions.length}
							setQuestions={setQuestions}
						/>
					))}
				</Stack>
				<SpeedDial
					ariaLabel="Speed dial for adding things"
					sx={{ position: "fixed", bottom: 16, right: 16 }}
					icon={<SpeedDialIcon />}
				>
					<SpeedDialAction
						icon={<QuestionMark />}
						tooltipTitle="Add question"
						onClick={() =>
							setQuestions((old) => [
								...old,
								nextValue(questions),
							])
						}
					/>

					<SpeedDialAction
						icon={
							<Button type="submit">
								<Add />
							</Button>
						}
						tooltipTitle="Add dataset"
					/>
				</SpeedDial>
			</Form>
		</>
	);
};

export default FormPage;
