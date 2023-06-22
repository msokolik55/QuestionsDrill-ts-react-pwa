import { Handler } from "@netlify/functions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: Handler = async (_event, _context) => {
	// load all players from the database
	const datasets = await prisma.dataset.findMany();
	return {
		statusCode: 200,
		body: JSON.stringify(datasets, (_key, value) =>
			// need to add a custom serializer because CockroachDB IDs map to
			// JavaScript BigInts, which JSON.stringify has trouble serializing.
			typeof value === "bigint" ? value.toString() : value
		),
	};
};

export { handler };
