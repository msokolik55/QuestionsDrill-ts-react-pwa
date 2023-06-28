import { useEffect } from "react";
import { get, set } from "idb-keyval";
import { useRecoilState, useSetRecoilState } from "recoil";

import "./App.css";
import { dbKeys } from "./data/dbKeys";
import { datasetIdAtom, datasetsAtom } from "./state/atom";
import LandingPage from "./routes/LandingPage";
import { useLoaderData } from "react-router-dom";
import { IDataset } from "./models/Dataset";

export const loader = async () => {
	const datasets = await fetch("/.netlify/functions/getDatasets");
	return datasets;
};

// TODO: locale language
function App() {
	const datasets = useLoaderData() as IDataset[];
	const setDatasets = useSetRecoilState(datasetsAtom);
	setDatasets(datasets);

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
