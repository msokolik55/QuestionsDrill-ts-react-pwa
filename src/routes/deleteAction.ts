import { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();

	const res = await fetch("/.netlify/functions/deleteDataset", {
		method: "delete",
		body: JSON.stringify(formData),
	});

	console.log(JSON.stringify(formData));
	return res;
};
