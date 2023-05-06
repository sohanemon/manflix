-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "author" TEXT,
    "description" TEXT,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "likes" TEXT,
    "dislikes" TEXT,
    "views" TEXT,
    "tags" TEXT,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);
