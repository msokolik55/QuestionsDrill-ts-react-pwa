import { Container, Grid } from "@mui/material";
import GridQuestion from "../components/question/GridQuestion";
import GridStats from "../components/stats/GridStats";

const DatasetPage = () => {
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
