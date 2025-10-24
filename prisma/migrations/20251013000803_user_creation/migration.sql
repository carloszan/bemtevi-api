-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('light', 'dim', 'dark');

-- CreateEnum
CREATE TYPE "Accent" AS ENUM ('blue', 'yellow', 'pink', 'purple', 'orange', 'green');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "name" TEXT NOT NULL,
    "theme" "Theme",
    "accent" "Accent",
    "website" TEXT,
    "location" TEXT,
    "username" TEXT NOT NULL,
    "photoURL" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "following" TEXT[],
    "followers" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "totalTweets" INTEGER NOT NULL DEFAULT 0,
    "totalPhotos" INTEGER NOT NULL DEFAULT 0,
    "pinnedTweet" TEXT,
    "coverPhotoURL" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
