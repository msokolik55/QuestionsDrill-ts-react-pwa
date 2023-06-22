import { Handler } from "@netlify/functions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: Handler = async (_event, _context) => {
	// const datasets = await prisma.dataset.findMany();
	const datasets = ["hello", "world"];

	return {
		statusCode: 200,
		body: JSON.stringify(datasets, (_key, value) =>
			typeof value === "bigint" ? value.toString() : value
		),
	};
};

export { handler };
