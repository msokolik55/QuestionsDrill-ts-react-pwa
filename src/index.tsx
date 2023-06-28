import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import ServiceWorkerWrapper from "./ServiceWorkerWrapper";
import "./index.css";
import LandingPage from "./routes/LandingPage";
import ErrorPage from "./routes/ErrorPage";
import DatasetPage from "./routes/DatasetPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "datasets/:datasetId",
				element: <DatasetPage />,
			},
		],
	},
]);

ReactDOM.render(
	<React.StrictMode>
		<ServiceWorkerWrapper />
		<RecoilRoot>
			<RouterProvider router={router} />
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
