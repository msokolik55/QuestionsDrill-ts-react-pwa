import { Stack, Typography } from "@mui/material";
import { Form } from "react-router-dom";

const ImportPage = () => {
	return (
		<Stack>
			<Typography>Choose a JSON file to import:</Typography>
			<Form method="post">
				<input type="file" name="file" accept="application/JSON" />
			</Form>
		</Stack>
	);
};

export default ImportPage;
