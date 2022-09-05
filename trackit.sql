-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 05, 2022 at 07:16 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trackit`
--

-- --------------------------------------------------------

--
-- Table structure for table `eservices`
--

CREATE TABLE `eservices` (
  `NUM_LIV` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DATE_PRELEV` date DEFAULT NULL,
  `HEURE_PRELEV` time DEFAULT NULL,
  `DATE_VAL` date DEFAULT NULL,
  `HEURE_VAL` time DEFAULT NULL,
  `DATE_SORTIE` date DEFAULT NULL,
  `HEURE_SORTIE` time DEFAULT NULL,
  `DATE_ARRIVE` date DEFAULT NULL,
  `HEURE_ARRIVE` time DEFAULT NULL,
  `SITE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ADRESSE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CHAUFF` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TEL` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `MATRICULE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TYPE_CAMION` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `KM` int(11) DEFAULT NULL,
  `CLIENT` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ARTICLE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `QTE` double DEFAULT NULL,
  `UN` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TYPE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `eservices`
--

INSERT INTO `eservices` (`NUM_LIV`, `DATE_PRELEV`, `HEURE_PRELEV`, `DATE_VAL`, `HEURE_VAL`, `DATE_SORTIE`, `HEURE_SORTIE`, `DATE_ARRIVE`, `HEURE_ARRIVE`, `SITE`, `ADRESSE`, `CHAUFF`, `TEL`, `MATRICULE`, `TYPE_CAMION`, `KM`, `CLIENT`, `ARTICLE`, `QTE`, `UN`, `TYPE`) VALUES
('C1121', '2022-08-04', '15:42:30', NULL, NULL, NULL, NULL, NULL, NULL, '109', 'MHAMID MARRAKECH', 'Ahmed', '677809507', '456674878857008', '2', 90, '2', 'béton', 5, '5', '1'),
('C1122', '2022-08-04', '15:42:30', '2022-08-04', '15:50:30', '2022-08-04', '16:00:30', '2022-08-04', '16:30:30', '109', 'MHAMID MARRAKECH', 'Amine', '677809567', '456674878857888', '2', 90, '2', 'béton', 5, '5', '1'),
('C1123', '2022-08-04', '15:42:30', '2022-08-04', '15:50:30', NULL, NULL, NULL, NULL, '109', 'MHAMID MARRAKECH', 'bilal', '607800167', '456674878857888', '2', 90, '2', 'pavés', 5, '5', '1'),
('C1124', '2022-08-04', '15:42:30', '2022-08-04', '15:50:30', '2022-08-04', '16:09:00', NULL, NULL, '109', 'MHAMID MARRAKECH', 'Rachid', '607722167', '456674878857888', '2', 90, '2', 'plancher', 5, '5', '1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`) VALUES
(2, 'Amine', 'test', '$2y$10$honsGDk4Bb2NyWQRbIwFuOo9Yi/IsxtEoZn.gzDSulelxKtbFwH/2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `eservices`
--
ALTER TABLE `eservices`
  ADD PRIMARY KEY (`NUM_LIV`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
