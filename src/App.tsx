import React, { SetStateAction, useState } from "react";
import "./App.css";

import {
	Container,
	Grid,
	AppBar,
	Toolbar,
	Button,
	Typography,
} from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import { IQuestion } from "./models/Question";

// TODO: add into atom
import { dataset } from "./data/dataset";
import GridStats from "./components/GridStats";

function App() {
	const questionsCount = dataset.questions.length;

	//#region useState
	const [question, setQuestion] = useState(dataset.questions[0]);
	const [questionID, setQuestionID] = useState(0);
	const [hasAnswered, setHasAnswered] = useState(false);

	// TODO: move into atoms
	const [answeredWrong, setAnsweredWrong] = useState<number[]>([]);
	const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
	// ENDTODO

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
			options: dataset.questions[n].options.sort(() => Math.random() - 0.5),
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
					<Grid item sm={7} style={{ width: "100%" }}>
						<h4>
							{questionID + 1} / {questionsCount}
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

					<GridStats
						answeredWrong={answeredWrong}
						setAnsweredWrong={setAnsweredWrong}
						answeredQuestions={answeredQuestions}
						setAnsweredQuestions={setAnsweredQuestions}
						generateQuestion={generateQuestion}
					/>
				</Grid>
			</Container>
		</>
	);
}

export default App;
