/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Links` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Links.url_unique" ON "Links"("url");
