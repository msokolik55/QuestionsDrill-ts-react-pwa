import { useRecoilValue } from "recoil";

import { Button, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import { TGenerateQuestion } from "../../models/generateQuestion";
import { questionIdAtom } from "../../state/atom";
import { GenerateQuestion } from "../generator";

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

const FooterQuestion = () => {
	const questionId = useRecoilValue(questionIdAtom);

	return (
		<Grid container justifyContent="space-between">
			<FooterButton
				newQuestion={() => GenerateQuestion(questionId - 1)}
				content={<ArrowBack />}
			/>
			<FooterButton newQuestion={GenerateQuestion} content="Náhodná" />
			<FooterButton
				newQuestion={() => GenerateQuestion(questionId + 1)}
				content={<ArrowForward />}
			/>
		</Grid>
	);
};

export default FooterQuestion;
