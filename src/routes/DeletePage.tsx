import { useRecoilValue, useSetRecoilState } from "recoil";
import { datasetsAtom, snackbarPropsAtom } from "../state/atom";
import { Button, Card, Stack, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Form } from "react-router-dom";
import { IDataset } from "../models/Dataset";
import { FormEvent } from "react";

const DeletePage = () => {
	const datasets = useRecoilValue(datasetsAtom);
	const setSnackbarProps = useSetRecoilState(snackbarPropsAtom);

	const handleSubmit = (
		event: FormEvent<HTMLFormElement>,
		dataset: IDataset
	) => {
		const confirmation = confirm(
			`Please confirm you want to delete: ${dataset.name}`
		);

		if (!confirmation) {
			event.preventDefault();
		}

		setSnackbarProps(() => {
			return {
				open: true,
				severity: confirmation ? "success" : "error",
				text: confirmation
					? "Dataset successfully deleted."
					: "Dataset deleting aborted.",
			};
		});
	};

	return (
		<Stack spacing={1}>
			<Typography variant="h4" component="h1">
				All datasets
			</Typography>
			{datasets.length === 0 && <p>You need to add a dataset first.</p>}
			{datasets.map((dataset) => (
				<Card key={dataset.id}>
					<Form
						method="post"
						onSubmit={(event) => handleSubmit(event, dataset)}
					>
						<input type="hidden" name="id" value={dataset.id} />
						<Button type="submit">
							<Delete />
						</Button>
						{dataset.name}
					</Form>
				</Card>
			))}
		</Stack>
	);
};

export default DeletePage;
