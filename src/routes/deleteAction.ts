import { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData) as { [k: string]: string };

	await fetch("/.netlify/functions/removeDataset", {
		method: "post",
		body: data["id"],
	});
	return data;
};
