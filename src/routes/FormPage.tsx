import { Button } from "@mui/material";
import { useState } from "react";
import { Form } from "react-router-dom";

export const action = async () => {
	const dataset = await fetch("/.netlify/functions/addDataset", {
		method: "post",
		body: "test",
	});
	return { dataset };
};

// TODO: design
const FormPage = () => {
	const [name, setName] = useState("");

	return (
		<Form method="post">
			<input
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button type="submit">Add dataset</Button>
		</Form>
	);
};

export default FormPage;
