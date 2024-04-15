-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2024 at 04:14 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devaccto`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(256) NOT NULL,
  `status` enum('ADMIN') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`, `status`) VALUES
(1, 'erlangftsiesta', 'Shiesuta12', 'ADMIN');

-- --------------------------------------------------------

--
-- Table structure for table `data_siswa`
--

CREATE TABLE `data_siswa` (
  `id_siswa` int(11) NOT NULL,
  `id_login` int(11) NOT NULL,
  `nama_lengkap` varchar(64) NOT NULL,
  `kelas` enum('X RPL 1','X RPL 2','X RPL 3','XI RPL 1','XI RPL 2','XI RPL 3') NOT NULL,
  `status` enum('AKTIF','NON AKTIF') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_siswa`
--

INSERT INTO `data_siswa` (`id_siswa`, `id_login`, `nama_lengkap`, `kelas`, `status`) VALUES
(1, 1, 'Erlangga Muhammad Hafiz', 'XI RPL 3', 'AKTIF'),
(2, 2, 'Priscilla Cecil Ardelia', 'X RPL 2', 'AKTIF'),
(3, 3, 'Aditya Kurnia Saputra', 'X RPL 2', 'AKTIF'),
(4, 4, 'Adly Fahreza', 'X RPL 2', 'AKTIF'),
(5, 5, 'Ahmad Qothrul Ghoits', 'X RPL 2', 'AKTIF'),
(6, 6, 'Muhammad Affan Fauzan', 'X RPL 3', 'AKTIF'),
(7, 7, 'John Obama Morowali Sipahutar', 'X RPL 2', 'AKTIF'),
(8, 8, 'Rynaldi Varel Firmansyah', 'X RPL 3', 'AKTIF'),
(9, 9, 'Satria Raja Djuanda', 'X RPL 2', 'AKTIF'),
(10, 10, 'Bunga Amalya Putri Patria', 'X RPL 3', 'AKTIF'),
(11, 11, 'Azzahra Dahanawati', 'X RPL 3', 'AKTIF'),
(12, 12, 'Zahra Silviana', 'X RPL 3', 'AKTIF'),
(13, 13, 'Muhammad Ar Ridho', 'X RPL 2', 'AKTIF'),
(14, 14, 'Ismaya Nugraha', 'X RPL 2', 'AKTIF'),
(15, 15, 'Muhammad Haikal', 'X RPL 2', 'AKTIF'),
(16, 16, 'Freya Syifania Dyola', 'X RPL 1', 'AKTIF'),
(17, 17, 'Dimas Purnomo', 'X RPL 1', 'AKTIF'),
(18, 18, 'Muhammad Fahri Nazi', 'X RPL 2', 'AKTIF'),
(19, 19, 'Luna Aulia Haldi', 'X RPL 2', 'AKTIF'),
(20, 20, 'Fha\'iz Raka Saputra', 'X RPL 2', 'AKTIF'),
(21, 21, 'Nasya Putri', 'X RPL 2', 'AKTIF'),
(22, 22, 'Kaylla Syafina Pramitha', 'X RPL 2', 'AKTIF'),
(23, 23, 'Khayyirah Talita Sakhi', 'X RPL 2', 'AKTIF'),
(24, 24, 'Vellina Adhisty', 'X RPL 2', 'AKTIF'),
(25, 25, 'Ihsan Wardhana Ristiarto', 'X RPL 1', 'AKTIF'),
(26, 26, 'Nadia Callysta', 'X RPL 2', 'AKTIF'),
(27, 27, 'Gheraldy Moses Tarigan', 'X RPL 2', 'AKTIF'),
(28, 28, 'Muhammad Fakhri Gunawan', 'X RPL 3', 'AKTIF'),
(29, 29, 'Angelika Oktaviani Sitohang', 'X RPL 3', 'AKTIF'),
(30, 30, '⁠Erlan Gunawan', 'X RPL 1', 'AKTIF'),
(31, 31, 'Muhammad Fatan Rahman', 'X RPL 1', 'AKTIF'),
(32, 32, 'Siti Nur Aisyah', 'X RPL 3', 'AKTIF'),
(33, 33, 'Nasya Lisa Bella', 'X RPL 3', 'AKTIF'),
(34, 34, 'Indah Ramadhani', 'X RPL 3', 'AKTIF'),
(35, 35, 'Dhafin Rizky Alfiansyah', 'X RPL 3', 'AKTIF'),
(36, 36, 'Muhammad Hasyid Fazri', 'X RPL 3', 'AKTIF'),
(37, 37, 'Yusuf Thalib', 'X RPL 3', 'AKTIF');

-- --------------------------------------------------------

--
-- Table structure for table `login_siswa`
--

CREATE TABLE `login_siswa` (
  `id_login` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(256) NOT NULL,
  `status` enum('AKTIF','NON AKTIF') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_siswa`
--

INSERT INTO `login_siswa` (`id_login`, `username`, `password`, `status`) VALUES
(1, 'erlangftsiesta', 'Shiesuta12', 'AKTIF'),
(2, 'cilla', '1234', 'AKTIF'),
(3, 'adit', '1234', 'AKTIF'),
(4, 'adeley', '1234', 'AKTIF'),
(5, 'ghoits', '1234', 'AKTIF'),
(6, 'affan', '1234', 'AKTIF'),
(7, 'john', '1234', 'AKTIF'),
(8, 'rynaldi', '1234', 'AKTIF'),
(9, 'satria', '1234', 'AKTIF'),
(10, 'bunga', '1234', 'AKTIF'),
(11, 'azzahra', '1234', 'AKTIF'),
(12, 'zahra', '1234', 'AKTIF'),
(13, 'ridho', '1234', 'AKTIF'),
(14, 'ismaya', '1234', 'AKTIF'),
(15, 'haikal', '1234', 'AKTIF'),
(16, 'freya', '1234', 'AKTIF'),
(17, 'dimas', '1234', 'AKTIF'),
(18, 'fahri', '1234', 'AKTIF'),
(19, 'luna', '1234', 'AKTIF'),
(20, 'raka', '1234', 'AKTIF'),
(21, 'nasya', '1234', 'AKTIF'),
(22, 'kaylla', '1234', 'AKTIF'),
(23, 'khayyirah', '1234', 'AKTIF'),
(24, 'vellina', '1234', 'AKTIF'),
(25, 'ihsan', '1234', 'AKTIF'),
(26, 'nadia', '1234', 'AKTIF'),
(27, 'gherald', '1234', 'AKTIF'),
(28, 'fakhri', '1234', 'AKTIF'),
(29, 'angelika', '1234', 'AKTIF'),
(30, 'erlan', '1234', 'AKTIF'),
(31, 'fatan', '1234', 'AKTIF'),
(32, 'siti', '1234', 'AKTIF'),
(33, 'bella', '1234', 'AKTIF'),
(34, 'indah', '1234', 'AKTIF'),
(35, 'dhafin', '1234', 'AKTIF'),
(36, 'hasyid', '1234', 'AKTIF'),
(37, 'yusuf', '1234', 'AKTIF');

-- --------------------------------------------------------

--
-- Table structure for table `presensi`
--

CREATE TABLE `presensi` (
  `id_presensi` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `nama_lengkap` varchar(64) NOT NULL,
  `kelas` enum('X RPL 1','X RPL 2','X RPL 3','XI RPL 1','XI RPL 2','XI RPL 3') NOT NULL,
  `presensi_hadir` datetime NOT NULL DEFAULT current_timestamp(),
  `presensi_pulang` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `presensi`
--

INSERT INTO `presensi` (`id_presensi`, `username`, `nama_lengkap`, `kelas`, `presensi_hadir`, `presensi_pulang`) VALUES
(1, 'cecil', 'Priscilla Cecil Ardelia', 'X RPL 2', '2024-03-29 23:57:50', '2024-03-30 00:07:37'),
(2, 'cecil', 'Priscilla Cecil Ardelia', 'X RPL 2', '2024-03-30 00:08:30', '2024-03-30 00:08:49'),
(3, 'cecil', 'Priscilla Cecil Ardelia', 'X RPL 2', '2024-03-30 00:11:03', '2024-03-30 00:11:58'),
(4, 'erlangftsiesta', 'Erlangga Muhammad Hafiz', 'XI RPL 3', '2024-03-30 00:11:10', '2024-03-30 00:11:30'),
(5, 'cecil', 'Priscilla Cecil Ardelia', 'X RPL 2', '2024-03-30 00:12:27', '2024-03-30 00:12:34'),
(6, 'erlangftsiesta', 'Erlangga Muhammad Hafiz', 'XI RPL 3', '2024-03-30 00:19:25', '2024-03-30 00:19:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `data_siswa`
--
ALTER TABLE `data_siswa`
  ADD PRIMARY KEY (`id_siswa`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `login_siswa`
--
ALTER TABLE `login_siswa`
  ADD PRIMARY KEY (`id_login`);

--
-- Indexes for table `presensi`
--
ALTER TABLE `presensi`
  ADD PRIMARY KEY (`id_presensi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `data_siswa`
--
ALTER TABLE `data_siswa`
  MODIFY `id_siswa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `login_siswa`
--
ALTER TABLE `login_siswa`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `presensi`
--
ALTER TABLE `presensi`
  MODIFY `id_presensi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data_siswa`
--
ALTER TABLE `data_siswa`
  ADD CONSTRAINT `data_siswa_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login_siswa` (`id_login`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
