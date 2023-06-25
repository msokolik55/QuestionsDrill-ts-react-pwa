import { Handler } from "@netlify/functions";
import prisma from "../../prisma/client";

const handler: Handler = async (_event, _context) => {
	const name = _event.body;
	if (!name)
		return {
			statusCode: 400,
			body: "Missing name for dataset.",
		};

	const dataset = await prisma.dataset.create({
		data: {
			name: name,
		},
	});

	return {
		statusCode: 200,
		body: `Dataset created: ${JSON.stringify(dataset)}`,
	};
};

export { handler };
