-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2024 at 12:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bemindbd`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `area` varchar(100) DEFAULT NULL,
  `code` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `Comentary` varchar(100) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `state` int(1) NOT NULL DEFAULT 0,
  `doingDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `img`, `name`, `area`, `code`, `startDate`, `endDate`, `Comentary`, `id_user`, `state`, `doingDate`) VALUES
(2, 'perrito.png', 'ensayo3', 'español', 101010, '2024-06-08 00:00:00', '2024-06-14 00:00:00', 'hacer lo mas pronto posible', 2, 0, NULL),
(10, 'perrito.png', 'hacer arroz', 'cocina', 252525, '2024-06-11 00:00:00', '2024-06-18 00:00:00', 'hacerlo rapido', 1, 0, NULL),
(11, 'perrito.png', 'hacer arroz', 'cocina', 252525, '2024-06-11 00:00:00', '2024-06-18 00:00:00', 'hacerlo rapido', 1, 0, NULL),
(12, 'perrito.png', 'hacer arroz', 'cocina', 252525, '2024-06-11 00:00:00', '2024-06-18 00:00:00', 'hacerlo rapido', 1, 0, NULL),
(13, 'perrito.png', 'hacer arroz', 'cocina', 252525, '2024-06-11 00:00:00', '2024-06-18 00:00:00', 'hacerlo rapido', 1, 0, NULL),
(14, 'perrito.png', 'hacer arroz', 'cocina', 252525, '2024-06-11 00:00:00', '2024-06-18 00:00:00', 'hacerlo rapido', 1, 0, NULL),
(15, 'perrito.png', 'hacer arroz', 'cocina', 252525, '2024-06-11 00:00:00', '2024-06-18 00:00:00', 'hacerlo rapido', 1, 1, '2024-06-13 21:51:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(22) NOT NULL,
  `lastName` varchar(22) NOT NULL,
  `email` varchar(22) NOT NULL,
  `password` varchar(22) NOT NULL,
  `studentCode` int(12) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `profession` varchar(20) DEFAULT NULL,
  `university` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `aboutMe` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`, `studentCode`, `username`, `age`, `profession`, `university`, `address`, `phone`, `city`, `country`, `postalCode`, `aboutMe`) VALUES
(1, 'emanuel esteban', 'restrepo', 'e05072003@gmail.com', '$2b$10$/ZVcbLPSiVKSMj/', 121212, 'nabetse05', 21, 'ing sistemas', 'unicomfacauca', 'carrera #5 - 22', '3116686210', 'popayan', 'colombia', 1456, 'ill be one the greatest'),
(2, 'steiner', 'herrera', 'steinerherrera@gmail.c', '$2b$10$9QqzmhR/S.0mZXA', 121212, 'juegosSteiner', 17, 'ing sistemas', 'autonoma', 'carrera #6 - 22', '302 6226935', 'cali', 'colombia', 6541, 'hello word im steiner');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_users_FK` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_users_FK` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
