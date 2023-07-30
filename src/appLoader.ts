export const loader = async () => {
	const datasets = (await fetch("/.netlify/functions/getDatasets")).json();
	return datasets;
	// return [{ id: "uuid01", name: "Dataset 1" }];
};
