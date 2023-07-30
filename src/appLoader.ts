export const loader = async () => {
	const datasets = await fetch("/.netlify/functions/getDatasets");
	console.log(datasets.body);
	return datasets;
	// return [{ id: "uuid01", name: "Dataset 1" }];
};
