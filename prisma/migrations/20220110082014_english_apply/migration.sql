/*
  Warnings:

  - Added the required column `english_name` to the `product_colors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product_colors` ADD COLUMN `english_name` VARCHAR(100) NOT NULL;
