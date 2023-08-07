import { Handler } from "@netlify/functions";
import prisma from "../../prisma/client";

const handler: Handler = async (_event, _context) => {
	const dataset = JSON.parse(_event.body || "");

	// const deleteQuestions = prisma.question.deleteMany({
	// 	where: {
	// 		datasetId: dataset["id"],
	// 	},
	// });

	const deleteDataset = await prisma.dataset.delete({
		where: { id: dataset["id"] },
	});

	// const transaction = await prisma.$transaction([
	// 	deleteQuestions,
	// 	deleteDataset,
	// ]);

	return {
		statusCode: 200,
		body: JSON.stringify(deleteDataset, (_key, value) =>
			typeof value === "bigint" ? value.toString() : value
		),
	};
};

export { handler };
