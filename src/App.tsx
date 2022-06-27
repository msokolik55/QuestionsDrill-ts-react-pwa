import { useRecoilValue, useSetRecoilState } from "recoil";

import {
	AppBar,
	Container,
	Grid,
	IconButton,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import "./App.css";
import GridQuestion from "./components/GridQuestion";
import MainDrawer from "./components/drawer/MainDrawer";
import GridStats from "./components/stats/GridStats";
import {
	answeredQuestionsAtom,
	hasAnsweredAtom,
	isDrawerOpenAtom,
	questionIdAtom,
} from "./state/atom";
import { datasetLengthSelector, datasetSelector } from "./state/selector";

// TODO: move all inline into separate files
function App() {
	//#region useState
	const dataset = useRecoilValue(datasetSelector);
	const setHasAnswered = useSetRecoilState(hasAnsweredAtom);
	const setIsDrawerOpen = useSetRecoilState(isDrawerOpenAtom);

	const questionsCount = useRecoilValue(datasetLengthSelector);
	const answeredQuestions = useRecoilValue(answeredQuestionsAtom);
	const setQuestionId = useSetRecoilState(questionIdAtom);
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
		<>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton
						color="inherit"
						onClick={() => setIsDrawerOpen(true)}
						edge="start"
					>
						<Menu />
					</IconButton>
					<Typography style={{ fontWeight: "bold" }}>{dataset.name}</Typography>
				</Toolbar>
			</AppBar>

			<MainDrawer />

			<Container>
				<Grid container direction="row" spacing={4}>
					<GridQuestion generateQuestion={generateQuestion} />
					<GridStats generateQuestion={generateQuestion} />
				</Grid>
			</Container>
		</>
	);
}

export default App;
