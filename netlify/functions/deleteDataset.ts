import { Handler } from "@netlify/functions";
import prisma from "../../prisma/client";

const handler: Handler = async (_event, _context) => {
	const datasetId = JSON.parse(_event.body || "");

	const deleteQuestions = prisma.question.deleteMany({
		where: {
			datasetId,
		},
	});

	const deleteDataset = prisma.dataset.delete({
		where: { id: datasetId["id"] },
	});

	const transaction = await prisma.$transaction([
		deleteQuestions,
		deleteDataset,
	]);

	return {
		statusCode: 200,
		body: JSON.stringify(transaction, (_key, value) =>
			typeof value === "bigint" ? value.toString() : value
		),
	};
};

export { handler };
