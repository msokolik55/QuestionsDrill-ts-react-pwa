interface ILoader {
	params: {
		datasetId: string;
	};
}

// TODO: set the question
export const loader = async ({ params }: ILoader) => {
	const dataset = await fetch("/.netlify/functions/getDataset", {
		body: params.datasetId,
	});
	if (!dataset) {
		throw new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
	return { dataset };
};
