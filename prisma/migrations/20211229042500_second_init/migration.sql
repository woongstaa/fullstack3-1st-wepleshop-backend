/*
  Warnings:

  - You are about to drop the column `product_detailsId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_details` DROP FOREIGN KEY `product_details_color_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_details` DROP FOREIGN KEY `product_details_size_id_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_product_detailsId_fkey`;

-- AlterTable
ALTER TABLE `product_details` MODIFY `color_id` INTEGER NULL,
    MODIFY `size_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `product_detailsId`;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_color_id_fkey` FOREIGN KEY (`color_id`) REFERENCES `product_colors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_size_id_fkey` FOREIGN KEY (`size_id`) REFERENCES `product_sizes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
