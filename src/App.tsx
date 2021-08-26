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
	//#region DELETE
	// const gen = () => {
	// 	let arr: Array<number> = [];
	// 	for (let i = 0; i < Questions.length - 1; i++) {
	// 		arr.push(i);
	// 	}
	// 	return arr;
	// };

	// const [answeredQuestions, setAnsweredQuestions] = useState<Array<number>>(gen());
	//#endregion

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

	const randomNumber = (maximum: number) => {
		return Math.floor(Math.random() * maximum);
	};

	const generateQuestion = (id: number | undefined = undefined) => {
		let n: number;
		if (id !== undefined) {
			n = (id + Questions.length) % Questions.length;
		} else {
			if (answeredQuestions.length >= Questions.length) {
				n = randomNumber(Questions.length);
			} else {
				do {
					n = randomNumber(Questions.length);
				} while (answeredQuestions.includes(n));
			}
		}

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

						<Grid container justifyContent="space-between">
							<Button
								variant="contained"
								color="secondary"
								onClick={() => generateQuestion(questionID - 1)}>
								Predchádzajúca
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => generateQuestion()}>
								Náhodná
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => generateQuestion(questionID + 1)}>
								Ďalšia
							</Button>
						</Grid>
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
									<Grid container justifyContent="space-between">
										Zle zodpovedané
										<span style={{ color: "grey" }}>
											{" " + answeredWrong.length}
										</span>
									</Grid>
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
								<Typography variant="subtitle1">
									<Grid container justifyContent="space-between">
										Zodpovedané{" "}
										<span style={{ color: "grey" }}>
											{" " +
												answeredQuestions.length +
												" / " +
												Questions.length}
										</span>
									</Grid>
								</Typography>
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
