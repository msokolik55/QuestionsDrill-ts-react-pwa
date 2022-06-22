import React, { useState } from "react";
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
import { answeredQuestionsAtom, questionIDAtom } from "./state/atom";
import { datasetLengthSelector, datasetSelector } from "./state/selector";
import GridQuestion from "./components/GridQuestion";

function App() {
	//#region useState
	const dataset = useRecoilValue(datasetSelector);
	const questionsCount = useRecoilValue(datasetLengthSelector);

	const setQuestionID = useSetRecoilState(questionIDAtom);
	const [hasAnswered, setHasAnswered] = useState(false);

	const [answeredQuestions, setAnsweredQuestions] = useRecoilState(
		answeredQuestionsAtom
	);
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
						answeredQuestions={answeredQuestions}
						setAnsweredQuestions={setAnsweredQuestions}
						generateQuestion={generateQuestion}
					/>
					<GridStats generateQuestion={generateQuestion} />
				</Grid>
			</Container>
		</>
	);
}

export default App;
