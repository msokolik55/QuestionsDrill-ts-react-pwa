import { useRecoilValue } from "recoil";

import { Button, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import { TGenerateQuestion } from "../../models/generateQuestion";
import { questionIdAtom } from "../../state/atom";

interface IFooterButtonProps {
	newQuestion: TGenerateQuestion;
	content: JSX.Element | string;
}

const FooterButton = (props: IFooterButtonProps) => {
	return (
		<Button
			variant="contained"
			color="secondary"
			onClick={() => props.newQuestion()}
		>
			{props.content}
		</Button>
	);
};

interface IFooterQuestionProps {
	generateQuestion: TGenerateQuestion;
}

const FooterQuestion = (props: IFooterQuestionProps) => {
	const questionId = useRecoilValue(questionIdAtom);

	return (
		<Grid container justifyContent="space-between">
			<FooterButton
				newQuestion={() => props.generateQuestion(questionId - 1)}
				content={<ArrowBack />}
			/>
			<FooterButton newQuestion={props.generateQuestion} content="Náhodná" />
			<FooterButton
				newQuestion={() => props.generateQuestion(questionId + 1)}
				content={<ArrowForward />}
			/>
		</Grid>
	);
};

export default FooterQuestion;
