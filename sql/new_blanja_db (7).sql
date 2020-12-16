-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 17 Des 2020 pada 02.07
-- Versi Server: 5.7.32-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `new_blanja_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `category_photo`) VALUES
(4, 'Short', 'https://res.cloudinary.com/devloops7/image/upload/v1605447841/newBlanja/ShortCategory_czom62.png'),
(5, 'Jacket', 'https://res.cloudinary.com/devloops7/image/upload/v1605447840/newBlanja/JacketCategory_jvjeee.png'),
(9, 'T-Shirt', 'https://res.cloudinary.com/devloops7/image/upload/v1605447841/newBlanja/TshirtCategory_odymmz.png'),
(11, 'Tie', 'https://res.cloudinary.com/devloops7/image/upload/v1605888520/newBlanja/hiclipart_42_aw0nhy.png'),
(12, 'Shocks', 'https://res.cloudinary.com/devloops7/image/upload/v1605888519/newBlanja/hiclipart_36_onssfd.png'),
(13, 'Hat', 'https://res.cloudinary.com/devloops7/image/upload/v1605888520/newBlanja/hiclipart_40_s4ugon.png'),
(14, 'Glasses', 'https://res.cloudinary.com/devloops7/image/upload/v1605888519/newBlanja/hiclipart_38_qyywq0.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `color_name` varchar(30) NOT NULL,
  `color_hexa` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `colors`
--

INSERT INTO `colors` (`id`, `color_name`, `color_hexa`) VALUES
(1, 'Blue', '#0000FF'),
(2, 'Red', '#FF0000');

-- --------------------------------------------------------

--
-- Struktur dari tabel `conditions`
--

CREATE TABLE `conditions` (
  `id` int(11) NOT NULL,
  `conditions` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `conditions`
--

INSERT INTO `conditions` (`id`, `conditions`) VALUES
(1, 'New'),
(2, 'Second');

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_detail`
--

CREATE TABLE `customer_detail` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(20) NOT NULL,
  `gender` varchar(11) NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `history_transactions`
--

CREATE TABLE `history_transactions` (
  `id` int(11) NOT NULL,
  `transaction_code` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history_transactions`
--

INSERT INTO `history_transactions` (`id`, `transaction_code`, `product_id`, `qty`, `total`, `created_at`, `updated_at`) VALUES
(3, 7007, 13, 1, 30000, '2020-11-24 04:58:47', '2020-11-24 04:58:47'),
(4, 7896, 9, 2, 100000, '2020-11-24 16:19:17', '2020-11-24 16:19:17'),
(5, 605, 7, 10, 30000, '2020-12-01 05:40:42', '2020-12-01 05:40:42'),
(6, 886, 1, 20, 50000, '2020-12-01 09:59:58', '2020-12-01 09:59:58'),
(7, 330, 8, 5, 30000, '2020-12-02 01:57:05', '2020-12-02 01:57:05'),
(8, 921, 4, 3, 300000, '2020-12-03 06:01:51', '2020-12-03 06:01:51'),
(9, 109, 4, 4, 400000, '2020-12-03 11:12:21', '2020-12-03 11:12:21'),
(10, 973, 5, 4, 400000, '2020-12-03 11:15:52', '2020-12-03 11:15:52'),
(11, 474, 1, 3, 150000, '2020-12-03 13:07:55', '2020-12-03 13:07:55'),
(12, 140, 8, 4, 120000, '2020-12-03 15:19:12', '2020-12-03 15:19:12'),
(13, 927, 8, 2, 60000, '2020-12-03 15:31:24', '2020-12-03 15:31:24'),
(14, 742, 4, 2, 200000, '2020-12-03 15:38:48', '2020-12-03 15:38:48'),
(15, 381, 8, 1, 30000, '2020-12-03 16:37:54', '2020-12-03 16:37:54'),
(16, 7007, 19, 1, 30000, '2020-12-10 08:26:00', '2020-12-10 08:26:00'),
(17, 7009, 19, 1, 30000, '2020-12-10 13:38:21', '2020-12-10 13:38:21'),
(18, 7010, 19, 1, 30000, '2020-12-10 14:13:49', '2020-12-10 14:13:49'),
(19, 7010, 21, 1, 30000, '2020-12-10 14:14:01', '2020-12-10 14:14:01'),
(20, 70112, 21, 1, 30000, '2020-12-10 16:44:39', '2020-12-10 16:44:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'customer'),
(2, 'seller');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `condition_id` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `product_desc` text NOT NULL,
  `product_photo` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `status_product_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `product_name`, `category_id`, `size_id`, `color_id`, `condition_id`, `product_price`, `product_qty`, `product_desc`, `product_photo`, `user_id`, `status_product_id`, `created_at`, `updated_at`) VALUES
(1, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608135297517-image.png \"]', 0, 0, '2020-11-22 04:31:15', '2020-12-16 23:14:57'),
(4, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136706036-image.png \",\"http://localhost:8007/image/1608136706037-image.png \",\"http://localhost:8007/image/1608136706038-image.png \"]', 0, 0, '2020-11-23 20:47:26', '2020-12-16 23:38:26'),
(5, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136709715-image.png \",\"http://localhost:8007/image/1608136709716-image.png \",\"http://localhost:8007/image/1608136709716-image.png \"]', 0, 0, '2020-11-23 20:55:36', '2020-12-16 23:38:29'),
(8, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136713569-image.png \",\"http://localhost:8007/image/1608136713571-image.png \",\"http://localhost:8007/image/1608136713587-image.png \"]', 0, 0, '2020-11-24 05:22:51', '2020-12-16 23:38:33'),
(13, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136718730-image.png \",\"http://localhost:8007/image/1608136718731-image.png \",\"http://localhost:8007/image/1608136718732-image.png \"]', 0, 0, '2020-12-09 22:25:42', '2020-12-16 23:38:38'),
(14, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136720988-image.png \",\"http://localhost:8007/image/1608136720990-image.png \",\"http://localhost:8007/image/1608136720991-image.png \"]', 0, 0, '2020-12-10 00:39:01', '2020-12-16 23:38:40'),
(15, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136724330-image.png \",\"http://localhost:8007/image/1608136724332-image.png \",\"http://localhost:8007/image/1608136724333-image.png \"]', 0, 0, '2020-12-10 00:41:01', '2020-12-16 23:38:44'),
(16, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136726550-image.png \",\"http://localhost:8007/image/1608136726552-image.png \",\"http://localhost:8007/image/1608136726591-image.png \"]', 0, 0, '2020-12-10 00:43:10', '2020-12-16 23:38:46'),
(17, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136734429-image.png \",\"http://localhost:8007/image/1608136734433-image.png \",\"http://localhost:8007/image/1608136734433-image.png \"]', 0, 0, '2020-12-10 00:43:44', '2020-12-16 23:38:54'),
(18, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136737022-image.png \",\"http://localhost:8007/image/1608136737024-image.png \",\"http://localhost:8007/image/1608136737028-image.png \"]', 0, 0, '2020-12-10 00:48:36', '2020-12-16 23:38:57'),
(19, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136739587-image.png \",\"http://localhost:8007/image/1608136739587-image.png \",\"http://localhost:8007/image/1608136739588-image.png \"]', 2, 0, '2020-12-10 05:21:54', '2020-12-16 23:38:59'),
(21, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136742411-image.png \",\"http://localhost:8007/image/1608136742412-image.png \",\"http://localhost:8007/image/1608136742413-image.png \"]', 2, 0, '2020-12-10 11:35:07', '2020-12-16 23:39:02'),
(22, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136744530-image.png \",\"http://localhost:8007/image/1608136744543-image.png \",\"http://localhost:8007/image/1608136744544-image.png \"]', 2, 3, '2020-12-16 12:43:24', '2020-12-16 23:39:04'),
(23, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136750026-image.png \",\"http://localhost:8007/image/1608136750027-image.png \",\"http://localhost:8007/image/1608136750028-image.png \"]', 3, 0, '2020-12-16 16:45:20', '2020-12-16 23:39:10'),
(24, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608136753282-image.png \",\"http://localhost:8007/image/1608136753286-image.png \",\"http://localhost:8007/image/1608136753287-image.png \"]', 3, 3, '2020-12-16 19:36:24', '2020-12-16 23:39:13'),
(25, 'Kaos Polos', 9, 2, 2, 1, 10000, 20, 'Kaos Polos', '[\"http://localhost:8007/image/1608143068085-image.png \",\"http://localhost:8007/image/1608143068085-image.png \",\"http://localhost:8007/image/1608143068085-image.png \"]', 3, 3, '2020-12-16 21:10:37', '2020-12-17 01:24:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `ratings`
--

INSERT INTO `ratings` (`id`, `product_id`, `rating`) VALUES
(1, 1, 4),
(2, 1, 5),
(3, 1, 3),
(4, 3, 3),
(5, 3, 3),
(6, 3, 5),
(7, 3, 5),
(8, 4, 5),
(9, 4, 5),
(10, 4, 2),
(11, 5, 2),
(12, 5, 5),
(13, 7, 1),
(14, 8, 1),
(15, 5, 5),
(16, 13, 1),
(17, 14, 1),
(18, 15, 1),
(19, 16, 1),
(20, 17, 1),
(21, 18, 1),
(22, 19, 1),
(23, 20, 1),
(24, 21, 1),
(25, 22, 1),
(26, 23, 1),
(27, 24, 1),
(28, 22, 1),
(29, 23, 1),
(30, 24, 1),
(31, 25, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `seller_detail`
--

CREATE TABLE `seller_detail` (
  `id` int(11) NOT NULL,
  `store_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(20) NOT NULL,
  `store_desc` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `size`
--

INSERT INTO `size` (`id`, `size`) VALUES
(1, 'XS'),
(2, 'S'),
(3, 'M'),
(4, 'L'),
(5, 'XL'),
(6, 'XXL'),
(7, 'XXXL'),
(8, '28'),
(9, '29'),
(10, '30'),
(11, '31'),
(12, '32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `status_history`
--

CREATE TABLE `status_history` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `status_product`
--

CREATE TABLE `status_product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `status_product`
--

INSERT INTO `status_product` (`id`, `name`) VALUES
(1, 'sold out'),
(2, 'archived'),
(3, 'ready');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `level_id`) VALUES
(1, 'dhiyo', '$2b$10$XUqDagJwyOBhmBSXKkKExuWxZnQ9OvxvxmrCjqNVyyssznAmP6ggm', 1),
(2, 'seller1', '$2b$10$3E/n0K9/VBGgYAhtg9e77eL7lVA5ZsGI6jmx/BA0gZA3ibC3w7Pta', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_detail`
--
ALTER TABLE `customer_detail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `history_transactions`
--
ALTER TABLE `history_transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_detail`
--
ALTER TABLE `seller_detail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_history`
--
ALTER TABLE `status_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_product`
--
ALTER TABLE `status_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `customer_detail`
--
ALTER TABLE `customer_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `history_transactions`
--
ALTER TABLE `history_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `seller_detail`
--
ALTER TABLE `seller_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `status_history`
--
ALTER TABLE `status_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `status_product`
--
ALTER TABLE `status_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
