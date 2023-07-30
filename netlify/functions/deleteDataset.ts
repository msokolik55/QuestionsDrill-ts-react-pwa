import { Handler } from "@netlify/functions";
import prisma from "../../prisma/client";

const handler: Handler = async (_event, _context) => {
	const datasetId = JSON.parse(_event.body || "");
	console.log(datasetId["id"]);
	const dataset = await prisma.dataset.delete({
		where: { id: datasetId["id"] },
	});

	return {
		statusCode: 200,
		body: JSON.stringify(dataset, (_key, value) =>
			typeof value === "bigint" ? value.toString() : value
		),
	};
};

export { handler };
