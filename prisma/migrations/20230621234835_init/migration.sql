-- CreateTable
CREATE TABLE "Dataset" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "name" STRING NOT NULL,

    CONSTRAINT "Dataset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "datasetId" INT4 NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "isRight" BOOL NOT NULL DEFAULT false,
    "questionId" INT4 NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dataset_name_key" ON "Dataset"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Question_title_key" ON "Question"("title");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_datasetId_fkey" FOREIGN KEY ("datasetId") REFERENCES "Dataset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
