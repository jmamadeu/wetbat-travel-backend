-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "depart_date" TIMESTAMP(3) NOT NULL,
    "return_date" TIMESTAMP(3) NOT NULL,
    "travelers" INTEGER NOT NULL,
    "transportation" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);
