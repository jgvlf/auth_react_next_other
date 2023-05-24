-- CreateTable
CREATE TABLE `usuario` (
    `usuario` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `usuario`(`usuario`),
    PRIMARY KEY (`usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
