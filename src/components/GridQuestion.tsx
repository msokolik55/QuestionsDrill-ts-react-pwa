import { useRecoilValue } from "recoil";

import { Button, Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import { questionIdAtom } from "../state/atom";
import { datasetLengthSelector, questionSelector } from "../state/selector";
import Option from "./Option";

interface IGridQuestionProps {
	generateQuestion: (id?: number | undefined) => void;
}

const GridQuestion = (props: IGridQuestionProps) => {
	const questionsCount = useRecoilValue(datasetLengthSelector);

	const questionId = useRecoilValue(questionIdAtom);
	const question = useRecoilValue(questionSelector);

	return (
		<Grid item sm={7} style={{ width: "100%" }}>
			<h4>
				{questionId + 1} / {questionsCount}
			</h4>
			<h4>{question?.title}</h4>
			{question?.options.map((option, idx) => (
				<Option key={idx} option={option} index={idx} />
			))}

			<Grid container justifyContent="space-between">
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.generateQuestion(questionId - 1)}
				>
					<ArrowBack />
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.generateQuestion()}
				>
					Náhodná
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.generateQuestion(questionId + 1)}
				>
					<ArrowForward />
				</Button>
			</Grid>
		</Grid>
	);
};

export default GridQuestion;
