import { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData) as { [k: string]: string };

	const res = await fetch("/.netlify/functions/removeDataset", {
		method: "post",
		body: JSON.stringify(data),
	});
	return res;
};
