import { Handler } from "@netlify/functions";
import prisma from "../../prisma/client";

const handler: Handler = async (_event, _context) => {
	const datasets = await prisma.dataset.findMany();

	return {
		statusCode: 200,
		body: JSON.stringify(datasets, (_key, value) =>
			typeof value === "bigint" ? value.toString() : value
		),
	};
};

export { handler };
