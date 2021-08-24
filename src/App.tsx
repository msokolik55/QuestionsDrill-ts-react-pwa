import React, { useState } from "react";
import "./App.css";

import {
	Container,
	Grid,
	AppBar,
	Toolbar,
	Typography,
	Card,
	Button,
	CardContent
} from "@material-ui/core";

import { Question } from "./data/interfaces";
import { Questions } from "./data/questions";

function App() {
	//#region useState
	const [question, setQuestion] = useState(Questions[0]);
	const [questionID, setQuestionID] = useState(0);
	const [hasAnswered, setHasAnswered] = useState(false);
	const [answeredWrong, setAnsweredWrong] = useState<Array<number>>([]);
	const [answeredQuestions, setAnsweredQuestions] = useState<Array<number>>([]);
	//#endregion

	//#region functions
	const checkAnswer = (id: number) => {
		if (!question.options[id].isRight) {
			setAnsweredWrong([...answeredWrong, questionID]);
		}

		setHasAnswered(true);
		setAnsweredQuestions([...answeredQuestions, questionID]);
	};

	const resetAnswers = () => {
		setAnsweredWrong([]);
		setAnsweredQuestions([]);
	};

	const generateQuestion = (id: number = -1) => {
		let n: number;
		if (id !== -1) {
			n = id;
		} else {
			do {
				n = Math.floor(Math.random() * Questions.length);
			} while (answeredQuestions.includes(n));
		}
		// n = id !== -1 ? id : Math.floor(Math.random() * Questions.length);

		let que: Question = {
			title: Questions[n].title,
			options: Questions[n].options.sort(() => Math.random() - 0.5)
		};
		setQuestion(que);
		setQuestionID(n);
		setHasAnswered(false);
	};

	// const shuffle = (opts: Array<Option>) => {
	// 	let size = opts.length;
	// 	let res: Array<Option> = [];
	// 	let used: Array<number> = [];

	// 	while (used.length < size) {
	// 		let i = Math.floor(Math.random() * size);
	// 		if (used.includes(i)) continue;

	// 		res.push(opts[i]);
	// 		used.push(i);
	// 	}

	// 	// setOptions(opts);
	// 	return res;
	// };

	//#endregion

	return (
		<>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<Typography variant="h4">Drill - rozhodčí úrovne E</Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Grid container direction="row" spacing={4}>
					<Grid item direction="column" sm={7}>
						<h4>
							{questionID + 1} / {Questions.length}
						</h4>
						<h4>{question.title}</h4>
						{question.options.map((opt, idx) => (
							<Button
								key={idx}
								style={{
									color: "black",
									backgroundColor: !hasAnswered
										? "#EFEFEF"
										: opt.isRight
										? "green"
										: "red",
									width: "100%",
									margin: "0.5rem 0 0.5rem 0",
									textTransform: "none"
								}}
								disabled={hasAnswered}
								onClick={() => checkAnswer(idx)}>
								{opt.title}
							</Button>
						))}
						<Button
							variant="contained"
							color="secondary"
							onClick={() => generateQuestion()}>
							Ďalšia
						</Button>
					</Grid>

					<Grid
						item
						direction="column"
						alignContent="center"
						sm={5}
						style={{ paddingTop: "2rem", display: "flex" }}>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => resetAnswers()}>
							Reset
						</Button>
						<Card style={{ marginBottom: "0.5rem" }}>
							<CardContent>
								<Typography variant="subtitle1">
									Zle zodpovedané
								</Typography>
								{answeredWrong
									.sort((a, b) => a - b)
									.map((num) => (
										<Button onClick={() => generateQuestion(num)}>
											{num + 1}
										</Button>
									))}
							</CardContent>
						</Card>
						<Card>
							<CardContent>
								<Typography variant="subtitle1">Zodpovedané</Typography>
								{answeredQuestions
									.sort((a, b) => a - b)
									.map((num) => (
										<Button onClick={() => generateQuestion(num)}>
											{num + 1}
										</Button>
									))}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
