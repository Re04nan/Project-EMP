-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Jan-2021 às 05:56
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `emp`
--
CREATE DATABASE IF NOT EXISTS `emp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `emp`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--
-- Criação: 23-Jan-2021 às 02:51
-- Última actualização: 23-Jan-2021 às 02:53
--

DROP TABLE IF EXISTS `cadastro`;
CREATE TABLE `cadastro` (
  `id_user` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `cadastro`:
--

--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`id_user`, `nome`, `email`, `senha`, `data`) VALUES
(1, 'teste', 'teste@teste.com', 'teste', '2021-01-22 23:53:01'),
(2, 'admin', 'admin@admin.com', 'admin', '2021-01-22 23:53:26'),
(3, 'amanda', 'amanda@amanda.com', 'amanda', '2021-01-22 23:53:44');

-- --------------------------------------------------------

--
-- Estrutura da tabela `modulo`
--
-- Criação: 23-Jan-2021 às 02:51
-- Última actualização: 23-Jan-2021 às 02:55
--

DROP TABLE IF EXISTS `modulo`;
CREATE TABLE `modulo` (
  `id_modulo` int(11) NOT NULL DEFAULT 1,
  `fk_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `modulo`:
--   `fk_user`
--       `cadastro` -> `id_user`
--

--
-- Extraindo dados da tabela `modulo`
--

INSERT INTO `modulo` (`id_modulo`, `fk_user`) VALUES
(1, 1),
(2, 2),
(3, 3);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `nome` (`nome`),
  ADD UNIQUE KEY `senha` (`senha`);

--
-- Índices para tabela `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`id_modulo`),
  ADD KEY `modulo_fk` (`fk_user`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `modulo`
--
ALTER TABLE `modulo`
  ADD CONSTRAINT `modulo_fk` FOREIGN KEY (`fk_user`) REFERENCES `cadastro` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
