import { useRecoilValue } from "recoil";

import { Button, Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import { questionIdAtom } from "../../state/atom";

interface IFooterButtonProps {
	newQuestion: (id?: number | undefined) => void;
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
	generateQuestion: (id?: number | undefined) => void;
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
