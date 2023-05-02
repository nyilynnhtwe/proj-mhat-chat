-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "release_date" TIMESTAMP(3) NOT NULL,
    "runtime" TEXT,
    "director" TEXT,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cast" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieCast" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_id_key" ON "Movie"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cast_id_key" ON "Cast"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieCast_AB_unique" ON "_MovieCast"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieCast_B_index" ON "_MovieCast"("B");

-- AddForeignKey
ALTER TABLE "_MovieCast" ADD CONSTRAINT "_MovieCast_A_fkey" FOREIGN KEY ("A") REFERENCES "Cast"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieCast" ADD CONSTRAINT "_MovieCast_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
