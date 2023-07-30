import { useEffect } from "react";
import { get, set } from "idb-keyval";
import { useRecoilState } from "recoil";

import "./App.css";
import { dbKeys } from "./data/dbKeys";
import { datasetIdAtom } from "./state/atom";
import LandingPage from "./routes/LandingPage";
import { useLoaderData } from "react-router-dom";
// import { IDataset } from "./models/Dataset";

// TODO: locale language
function App() {
	const datasets = useLoaderData();
	console.log(datasets);

	// const setDatasets = useSetRecoilState(datasetsAtom);
	// setDatasets(datasets);

	const [datasetId, setDatasetId] = useRecoilState(datasetIdAtom);

	useEffect(() => {
		get(dbKeys.lastDatasetId).then((lastDatasetId) => {
			if (lastDatasetId) setDatasetId(lastDatasetId);
		});
	}, [setDatasetId]);

	useEffect(() => {
		set(dbKeys.lastDatasetId, datasetId);
	}, [datasetId]);

	return <LandingPage />;
}

export default App;
