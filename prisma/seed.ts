import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
	const dataset = await prisma.dataset.create({
		data: {
			name: "Dataset 1",
			questions: {
				create: {
					title: "Question 1 is:",
					options: {
						createMany: {
							data: [
								{
									title: "good",
									isRight: false,
								},
								{ title: "bad", isRight: true },
							],
						},
					},
				},
			},
		},
	});

	return dataset;
};

main()
	.then(async (res) => {
		console.log(res);
		await prisma.$disconnect();
	})
	.catch(async (err) => {
		console.error(err);
		await prisma.$disconnect();
		process.exit(1);
	});
