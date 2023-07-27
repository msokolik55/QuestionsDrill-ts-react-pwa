import { useRecoilValue } from "recoil";
import { datasetsAtom } from "../state/atom";
import { Button, Card, Stack, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

const DeletePage = () => {
	const datasets = useRecoilValue(datasetsAtom);

	return (
		<Stack spacing={1}>
			<Typography variant="h4" component="h1">
				All datasets
			</Typography>
			{datasets.map((dataset) => (
				<Card>
					<Button>
						<Delete />
					</Button>
					{dataset.name}
				</Card>
			))}
		</Stack>
	);
};

export default DeletePage;
