import { createBrowserRouter } from "react-router-dom";
import App, { loader as appLoader } from "./App";
import ErrorPage from "./routes/ErrorPage";
import DatasetPage from "./routes/DatasetPage";
import MainPage from "./routes/MainPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		loader: appLoader,
		children: [
			{
				path: "/",
				element: <MainPage />,
			},
			{
				path: "dataset/:datasetId",
				element: <DatasetPage />,
			},
		],
	},
]);
