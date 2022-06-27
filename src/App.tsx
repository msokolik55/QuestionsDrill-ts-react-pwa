import React, { useState } from "react";
import "./App.css";

import {
	Container,
	Grid,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Divider,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Button,
} from "@material-ui/core";
import { Menu, ListAlt, ChevronLeft } from "@material-ui/icons";

import GridStats from "./components/stats/GridStats";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { datasetSelector, datasetLengthSelector } from "./state/selector";
import GridQuestion from "./components/GridQuestion";
import {
	answeredQuestionsAtom,
	hasAnsweredAtom,
	questionIDAtom,
} from "./state/atom";

// TODO: reorder all imports (set in Prettier)
function App() {
	//#region useState
	const dataset = useRecoilValue(datasetSelector);
	const setHasAnswered = useSetRecoilState(hasAnsweredAtom);

	const questionsCount = useRecoilValue(datasetLengthSelector);
	const answeredQuestions = useRecoilValue(answeredQuestionsAtom);
	const setQuestionID = useSetRecoilState(questionIDAtom);

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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

	const handleOpenDrawer = () => {
		setIsDrawerOpen(true);
	};

	const handleCloseDrawer = () => {
		setIsDrawerOpen(false);
	};
	//#endregion

	return (
		<>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton
						color="inherit"
						onClick={handleOpenDrawer}
						edge="start"
					>
						<Menu />
					</IconButton>
					<Typography variant="h4">{dataset.name}</Typography>
				</Toolbar>
			</AppBar>

			<SwipeableDrawer
				variant="persistent"
				anchor="left"
				open={isDrawerOpen}
				onOpen={handleOpenDrawer}
				onClose={handleCloseDrawer}
			>
				<div>
					<IconButton onClick={handleCloseDrawer}>
						<ChevronLeft />
					</IconButton>
				</div>
				<Divider />
				<List>
					{["Datasets"].map((text) => (
						<ListItem key={text}>
							<Button>
								<ListItemIcon>
									<ListAlt />
								</ListItemIcon>
								<ListItemText primary={text} />
							</Button>
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>

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
