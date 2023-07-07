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
	return { dataset };
};
