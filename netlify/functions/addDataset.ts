import { Handler } from "@netlify/functions";
import prisma from "../../prisma/client";
import { IDataset } from "../../src/models/Dataset";

const handler: Handler = async (_event, _context) => {
	const data: IDataset = JSON.parse(_event.body || "");
	if (!data)
		return {
			statusCode: 400,
			body: "Missing name for dataset.",
		};

	const dataset = await prisma.dataset.create({
		data: {
			name: data.name,
			questions: {
				createMany: {
					data: data.questions.map((question) => {
						return { title: question.title };
					}),
				},
			},
		},
	});

	return {
		statusCode: 200,
		body: `Dataset created: ${JSON.stringify(dataset)}`,
	};
};

export { handler };
