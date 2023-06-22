import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDatasets = async () => {
	const datasets = await prisma.dataset.findMany();
	console.log(datasets);
};
