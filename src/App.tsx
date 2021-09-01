import React, { useState } from "react";
import "./App.css";

import {
	Container,
	Grid,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails
} from "@material-ui/core";
import { ArrowBack, ArrowForward, ExpandMore } from "@material-ui/icons";

import { Question } from "./data/interfaces";
import { Questions } from "./data/questions";

interface PropsStats {
	title: string;
	items: Array<number>;
	maximum: number;
	generateQuestion: (id?: number | undefined) => void;
	keyLabel: string;
}

function AccordionStats({
	title,
	items,
	maximum,
	generateQuestion,
	keyLabel
}: PropsStats) {
	return (
		<Accordion style={{ width: "100%" }}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Grid container justifyContent="space-between">
					<Typography variant="subtitle1">{title}</Typography>
					<Typography style={{ color: "grey" }}>
						{items.length + " / " + maximum}
					</Typography>
				</Grid>
			</AccordionSummary>
			<AccordionDetails style={{ flexWrap: "wrap" }}>
				{items
					.sort((a, b) => a - b)
					.map((num) => (
						<Button
							key={keyLabel + num}
							onClick={() => generateQuestion(num)}>
							{num + 1}
						</Button>
					))}
			</AccordionDetails>
		</Accordion>
	);
}

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
	const insertID = (
		items: Array<number>,
		setter: (value: React.SetStateAction<number[]>) => void,
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
					<Typography variant="h4">Drill - rozhodčí úrovně E</Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Grid container direction="row" spacing={4}>
					<Grid item sm={7} style={{ width: "100%" }}>
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
								<ArrowBack />
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
								<ArrowForward />
							</Button>
						</Grid>
					</Grid>

					<Grid item sm={5} style={{ flex: 1 }}>
						<Grid
							container
							direction="column"
							alignContent="center"
							style={{ paddingTop: "2rem", display: "flex" }}>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => resetAnswers()}>
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
								maximum={Questions.length}
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
