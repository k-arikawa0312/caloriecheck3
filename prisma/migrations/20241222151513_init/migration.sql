-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "menuTitle" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "ateAt" TIMESTAMP(3) NOT NULL,
    "timeZone" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "protein" INTEGER NOT NULL,
    "fat" INTEGER NOT NULL,
    "carbs" INTEGER NOT NULL,
    "fiber" INTEGER NOT NULL,
    "salt" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
