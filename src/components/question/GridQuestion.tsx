import { useRecoilValue } from "recoil";

import { Grid } from "@mui/material";

import { TGenerateQuestion } from "../../models/generateQuestion";
import { questionIdAtom } from "../../state/atom";
import { datasetLengthSelector, questionSelector } from "../../state/selector";
import FooterQuestion from "./FooterQuestion";
import Option from "./Option";

interface IGridQuestionProps {
	generateQuestion: TGenerateQuestion;
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

			<FooterQuestion generateQuestion={props.generateQuestion} />
		</Grid>
	);
};

export default GridQuestion;
