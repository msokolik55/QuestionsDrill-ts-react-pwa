import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { loader as appLoader } from "./appLoader";
import { action as formAction } from "./routes/formAction";
import ErrorPage from "./routes/ErrorPage";
import DatasetPage from "./routes/DatasetPage";
import MainPage from "./routes/MainPage";
import FormPage from "./routes/FormPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		loader: appLoader,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <MainPage />,
					},
					{
						path: "dataset/:datasetId",
						element: <DatasetPage />,
					},
					{
						path: "dataset/add",
						element: <FormPage />,
						action: formAction,
					},
				],
			},
		],
	},
]);
