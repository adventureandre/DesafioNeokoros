/*
  Warnings:

  - You are about to drop the column `password` on the `tasks` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - Added the required column `priority` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `password`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `dueDate` DATETIME(3) NULL,
    ADD COLUMN `priority` VARCHAR(191) NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL;
