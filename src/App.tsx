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
import { useRecoilValue } from "recoil";
import { datasetSelector } from "./state/selector";
import GridQuestion from "./components/GridQuestion";
import { generateQuestion } from "./utils/generate";

function App() {
	//#region useState
	const dataset = useRecoilValue(datasetSelector);
	const [hasAnswered, setHasAnswered] = useState(false);
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
						generateQuestion={generateQuestion}
					/>
					<GridStats generateQuestion={generateQuestion} />
				</Grid>
			</Container>
		</>
	);
}

export default App;
