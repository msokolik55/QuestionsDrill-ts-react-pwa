import { Handler } from "@netlify/functions";
import prisma from "../../prisma/client";

const handler: Handler = async (_event, _context) => {
	const dataset = await prisma.dataset.create({
		data: {
			name: "Test dataset",
		},
	});

	return {
		statusCode: 200,
		body: `Dataset created: ${JSON.stringify(dataset)}`,
	};
};

export { handler };
