import { Stack, Typography } from "@mui/material";
import { FormEvent } from "react";
import { Form } from "react-router-dom";

const ImportPage = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		const reader = new FileReader();
		reader.onload = async () => {
			const text = e.currentTarget.result;
			console.log(text);
		};
		reader.readAsText(e.currentTarget.files[0]);
	};

	return (
		<Stack>
			<Typography>Choose a JSON file to import:</Typography>
			<Form method="post" onSubmit={handleSubmit}>
				<input type="file" name="file" accept="application/JSON" />
			</Form>
		</Stack>
	);
};

export default ImportPage;
