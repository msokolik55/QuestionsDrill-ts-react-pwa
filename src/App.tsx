import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { get, set } from "idb-keyval";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { Container, Grid, Typography } from "@mui/material";

import "./App.css";
import MainPage from "./components/MainPage";
import GridQuestion from "./components/question/GridQuestion";
import GridStats from "./components/stats/GridStats";
import { dbKeys } from "./data/dbKeys";
import {
	answeredQuestionsAtom,
	datasetIdAtom,
	hasAnsweredAtom,
	questionIdAtom,
} from "./state/atom";
import { datasetLengthSelector, datasetSelector } from "./state/selector";

const theme = createTheme();

// TODO: locale language
function App() {
	//#region useState
	const [datasetId, setDatasetId] = useRecoilState(datasetIdAtom);
	const dataset = useRecoilValue(datasetSelector);

	const setHasAnswered = useSetRecoilState(hasAnsweredAtom);

	const questionsCount = useRecoilValue(datasetLengthSelector);
	const answeredQuestions = useRecoilValue(answeredQuestionsAtom);
	const setQuestionId = useSetRecoilState(questionIdAtom);
	//#endregion

	//#region useEffect
	useEffect(() => {
		get(dbKeys.lastDatasetId).then((lastDatasetId) => {
			if (lastDatasetId) setDatasetId(lastDatasetId);
		});
	}, [setDatasetId]);

	useEffect(() => {
		set(dbKeys.lastDatasetId, datasetId);
	}, [datasetId]);
	//#endregion

	//#region no dataset
	if (!dataset || !questionsCount)
		return (
			<MainPage
				content={
					<Container style={{ marginTop: "1em" }}>
						<Typography>
							Vyberte si ľubovoľný drill z bočného menu.
						</Typography>
					</Container>
				}
			/>
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

		setQuestionId(n);
		setHasAnswered(false);
	};
	//#endregion

	return (
		<ThemeProvider theme={theme}>
			<MainPage
				content={
					<Container>
						<Grid container direction="row" spacing={4}>
							<GridQuestion generateQuestion={generateQuestion} />
							<GridStats generateQuestion={generateQuestion} />
						</Grid>
					</Container>
				}
			/>
		</ThemeProvider>
	);
}

export default App;
