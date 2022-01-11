/*
  Warnings:

  - You are about to drop the column `product_detail_id` on the `carts` table. All the data in the column will be lost.
  - Added the required column `color` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `carts` DROP FOREIGN KEY `carts_product_detail_id_fkey`;

-- AlterTable
ALTER TABLE `carts` DROP COLUMN `product_detail_id`,
    ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `size` VARCHAR(191) NOT NULL;
