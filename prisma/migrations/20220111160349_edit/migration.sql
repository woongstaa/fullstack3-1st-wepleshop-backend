/*
  Warnings:

  - Added the required column `image` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carts` ADD COLUMN `image` VARCHAR(255) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL;
