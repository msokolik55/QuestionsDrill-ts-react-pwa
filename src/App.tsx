import { useEffect } from "react";
import { get, set } from "idb-keyval";
import { useRecoilState, useSetRecoilState } from "recoil";

import "./App.css";
import { dbKeys } from "./data/dbKeys";
import { datasetIdAtom, datasetsAtom } from "./state/atom";
import LandingPage from "./routes/LandingPage";

// TODO: locale language
function App() {
	//#region useState
	const setDatasets = useSetRecoilState(datasetsAtom);

	const [datasetId, setDatasetId] = useRecoilState(datasetIdAtom);
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

	return <LandingPage />;
}

export default App;
