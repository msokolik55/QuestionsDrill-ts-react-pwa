import { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();

	console.log(Object.fromEntries(formData) as { [k: string]: string });

	const res = await fetch("/.netlify/functions/removeDataset", {
		method: "post",
		body: JSON.stringify(formData),
	});
	return res;
};
