/*
  Warnings:

  - You are about to drop the column `authorId` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_authorId_fkey`;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `authorId`,
    ADD COLUMN `author_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
