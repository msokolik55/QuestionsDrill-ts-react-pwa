import { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();

	const res = await fetch("/.netlify/functions/removeDataset", {
		method: "post",
		body: JSON.stringify(formData),
	});

	console.log(res);
	return res;
};
