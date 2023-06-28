import { Container, Grid } from "@mui/material";
import GridQuestion from "../components/question/GridQuestion";
import GridStats from "../components/stats/GridStats";
import { useLoaderData } from "react-router-dom";
import { IDataset } from "../models/Dataset";

interface ILoader {
	params: {
		datasetId: string;
	};
}

// TODO: set the question
export const loader = async ({ params }: ILoader) => {
	const dataset = await fetch("/.netlify/functions/getDataset", {
		body: params.datasetId,
	});
	return { dataset };
};

const DatasetPage = () => {
	const dataset = useLoaderData();

	return (
		<Container>
			<Grid container direction="row" spacing={4}>
				<GridQuestion />
				<GridStats />
			</Grid>
		</Container>
	);
};

export default DatasetPage;
