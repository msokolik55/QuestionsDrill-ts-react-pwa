import React, { useState } from "react";
import "./App.css";

import {
	Container,
	Grid,
	AppBar,
	Toolbar,
	Typography,
} from "@material-ui/core";

import { IQuestion } from "./models/Question";

import GridStats from "./components/GridStats";
import { useRecoilState, useRecoilValue } from "recoil";
import { answeredQuestionsAtom } from "./state/atom";
import { datasetLengthSelector, datasetSelector } from "./state/selector";
import GridQuestion from "./components/GridQuestion";

function App() {
	//#region useState
	const dataset = useRecoilValue(datasetSelector);
	const questionsCount = useRecoilValue(datasetLengthSelector);

	const [question, setQuestion] = useState(dataset.questions[0]);
	const [questionID, setQuestionID] = useState(0);
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

		const question: IQuestion = {
			title: dataset.questions[n].title,
			options: [...dataset.questions[n].options].sort(
				() => Math.random() - 0.5
			),
		};
		setQuestion(question);
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
						question={question}
						questionID={questionID}
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
