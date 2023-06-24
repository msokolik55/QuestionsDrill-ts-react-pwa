/*
  Warnings:

  - You are about to alter the column `id` on the `Option` table. The data in that column will be cast from `Int` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `Question` table. The data in that column will be cast from `Int` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `Dataset` table. The data in that column will be cast from `Int` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Option" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "isRight" BOOL NOT NULL DEFAULT false,
    "questionId" STRING NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Option" ("id","isRight","questionId","title") SELECT "id","isRight","questionId","title" FROM "Option";
DROP TABLE "Option" CASCADE;
ALTER TABLE "_prisma_new_Option" RENAME TO "Option";
CREATE TABLE "_prisma_new_Question" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "datasetId" STRING NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
DROP INDEX "Question_title_key";
INSERT INTO "_prisma_new_Question" ("datasetId","id","title") SELECT "datasetId","id","title" FROM "Question";
DROP TABLE "Question" CASCADE;
ALTER TABLE "_prisma_new_Question" RENAME TO "Question";
CREATE UNIQUE INDEX "Question_title_key" ON "Question"("title");
CREATE TABLE "_prisma_new_Dataset" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Dataset_pkey" PRIMARY KEY ("id")
);
DROP INDEX "Dataset_name_key";
INSERT INTO "_prisma_new_Dataset" ("id","name") SELECT "id","name" FROM "Dataset";
DROP TABLE "Dataset" CASCADE;
ALTER TABLE "_prisma_new_Dataset" RENAME TO "Dataset";
CREATE UNIQUE INDEX "Dataset_name_key" ON "Dataset"("name");
