/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Video` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Video_link_key" ON "Video"("link");
