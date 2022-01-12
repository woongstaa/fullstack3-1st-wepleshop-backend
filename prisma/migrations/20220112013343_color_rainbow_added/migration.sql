/*
  Warnings:

  - Made the column `color_id` on table `product_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size_id` on table `product_details` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `product_details` DROP FOREIGN KEY `product_details_color_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_details` DROP FOREIGN KEY `product_details_size_id_fkey`;

-- AlterTable
ALTER TABLE `product_details` MODIFY `color_id` INTEGER NOT NULL,
    MODIFY `size_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_color_id_fkey` FOREIGN KEY (`color_id`) REFERENCES `product_colors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_size_id_fkey` FOREIGN KEY (`size_id`) REFERENCES `product_sizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
