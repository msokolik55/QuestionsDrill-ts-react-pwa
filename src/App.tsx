import React, { SetStateAction, useState } from "react";
import "./App.css";

import { Container, Grid, AppBar, Toolbar, Button } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import AccordionStats from "./components/AccordionStats";

import { IQuestion } from "./models/Question";
import { questions } from "./data/questions";

function App() {
	//#region useState
	const [question, setQuestion] = useState(questions[0]);
	const [questionID, setQuestionID] = useState(0);
	const [hasAnswered, setHasAnswered] = useState(false);
	const [answeredWrong, setAnsweredWrong] = useState<number[]>([]);
	const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
	//#endregion

	//#region functions
	const insertID = (
		items: number[],
		setter: (value: SetStateAction<number[]>) => void,
		id: number
	) => {
		if (!items.includes(id)) {
			setter([...items, id]);
		}
	};

	const checkAnswer = (id: number) => {
		if (!question.options[id].isRight)
			insertID(answeredWrong, setAnsweredWrong, questionID);

		insertID(answeredQuestions, setAnsweredQuestions, questionID);

		setHasAnswered(true);
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
			n = (id + questions.length) % questions.length;
		} else {
			if (answeredQuestions.length >= questions.length) {
				n = randomNumber(questions.length);
			} else {
				do {
					n = randomNumber(questions.length);
				} while (answeredQuestions.includes(n));
			}
		}

		const question: IQuestion = {
			title: questions[n].title,
			options: questions[n].options.sort(() => Math.random() - 0.5),
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
					{/* <Typography variant="h4">Drill - rozhodčí úrovně E</Typography> */}
				</Toolbar>
			</AppBar>
			<Container>
				<Grid container direction="row" spacing={4}>
					<Grid item sm={7} style={{ width: "100%" }}>
						<h4>
							{questionID + 1} / {questions.length}
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
									textTransform: "none",
								}}
								disabled={hasAnswered}
								onClick={() => checkAnswer(idx)}
							>
								{opt.title}
							</Button>
						))}

						<Grid container justifyContent="space-between">
							<Button
								variant="contained"
								color="secondary"
								onClick={() => generateQuestion(questionID - 1)}
							>
								<ArrowBack />
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => generateQuestion()}
							>
								Náhodná
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => generateQuestion(questionID + 1)}
							>
								<ArrowForward />
							</Button>
						</Grid>
					</Grid>

					<Grid item sm={5} style={{ flex: 1 }}>
						<Grid
							container
							direction="column"
							alignContent="center"
							style={{ paddingTop: "2rem", display: "flex" }}
						>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => resetAnswers()}
							>
								Reset
							</Button>

							<AccordionStats
								title="Zle zodpovedané"
								items={answeredWrong}
								maximum={answeredQuestions.length}
								generateQuestion={generateQuestion}
								keyLabel="wrong-"
							/>
							<AccordionStats
								title="Zodpovedané"
								items={answeredQuestions}
								maximum={questions.length}
								generateQuestion={generateQuestion}
								keyLabel="answered-"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
