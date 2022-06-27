import React from "react";
import "./App.css";

import {
	Container,
	Grid,
	AppBar,
	Toolbar,
	Typography,
} from "@material-ui/core";

import GridStats from "./components/GridStats";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { datasetSelector, datasetLengthSelector } from "./state/selector";
import GridQuestion from "./components/GridQuestion";
import {
	answeredQuestionsAtom,
	hasAnsweredAtom,
	questionIDAtom,
} from "./state/atom";

function App() {
	//#region useState
	const dataset = useRecoilValue(datasetSelector);
	const [hasAnswered, setHasAnswered] = useRecoilState(hasAnsweredAtom);

	const questionsCount = useRecoilValue(datasetLengthSelector);
	const answeredQuestions = useRecoilValue(answeredQuestionsAtom);
	const setQuestionID = useSetRecoilState(questionIDAtom);
	//#endregion

	//#region functions
	const randomNumber = (maximum: number) => {
		return Math.floor(Math.random() * maximum);
	};

	const generateQuestion = (id: number | undefined = undefined) => {
		let n: number;

		if (id !== undefined) {
			n = (id + questionsCount) % questionsCount;
		} else {
			if (answeredQuestions.length >= questionsCount) {
				n = randomNumber(questionsCount);
			} else {
				do {
					n = randomNumber(questionsCount);
				} while (answeredQuestions.includes(n));
			}
		}

		setQuestionID(n);
		setHasAnswered(false);
	};
	//#endregion

	return (
		<>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<Typography variant="h4">{dataset.name}</Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Grid container direction="row" spacing={4}>
					<GridQuestion
						hasAnswered={hasAnswered}
						setHasAnswered={setHasAnswered}
						generateQuestion={generateQuestion}
					/>
					<GridStats generateQuestion={generateQuestion} />
				</Grid>
			</Container>
		</>
	);
}

export default App;
