import { useEffect } from "react";
import { get, set } from "idb-keyval";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { Container, Grid, Typography } from "@mui/material";

import "./App.css";
import MainPage from "./components/MainPage";
import GridQuestion from "./components/question/GridQuestion";
import GridStats from "./components/stats/GridStats";
import { dbKeys } from "./data/dbKeys";
import { datasetIdAtom, datasetsAtom } from "./state/atom";
import { datasetLengthSelector, datasetSelector } from "./state/selector";

// TODO: locale language
function App() {
	//#region useState
	const setDatasets = useSetRecoilState(datasetsAtom);

	const [datasetId, setDatasetId] = useRecoilState(datasetIdAtom);
	const dataset = useRecoilValue(datasetSelector);

	const questionsCount = useRecoilValue(datasetLengthSelector);
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

	useEffect(() => {
		fetch("/.netlify/functions/getDatasets")
			.then((response) => response.json())
			.then((data) => setDatasets(data));
	}, [setDatasets]);
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

	return (
		<MainPage
			content={
				<Container>
					<Grid container direction="row" spacing={4}>
						<GridQuestion />
						<GridStats />
					</Grid>
				</Container>
			}
		/>
	);
}

export default App;
