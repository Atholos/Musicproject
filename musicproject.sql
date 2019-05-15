-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 15, 2019 at 05:26 PM
-- Server version: 5.5.60-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE IF NOT EXISTS `Category` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`ID`, `Name`) VALUES
(1, 'Guitar'),
(2, 'Drums'),
(3, 'Tabs'),
(4, 'Chords');

-- --------------------------------------------------------

--
-- Table structure for table `Profilepic`
--

CREATE TABLE IF NOT EXISTS `Profilepic` (
  `PicID` int(11) NOT NULL,
  `Picuser` int(11) DEFAULT NULL,
  `Image` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Profilepic`
--

INSERT INTO `Profilepic` (`PicID`, `Picuser`, `Image`) VALUES
(26, 37, './public/CSS/images/profilepics/310f825207792abfab9c1b3b30082d88');

-- --------------------------------------------------------

--
-- Table structure for table `Uploadable`
--

CREATE TABLE IF NOT EXISTS `Uploadable` (
  `FileID` int(11) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Thumbnail` varchar(255) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Image` varchar(255) NOT NULL,
  `Original` varchar(255) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `Likes` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=10000097 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Uploadable`
--

INSERT INTO `Uploadable` (`FileID`, `Description`, `Title`, `Thumbnail`, `Date`, `Image`, `Original`, `UserID`, `ID`, `Likes`) VALUES
(10000075, 'Tab', 'Tab', 'thumbs/thumb_2e4010f91b26b03e6e85b476752f4b3f', '2019-05-09 06:18:26', 'uploads/2e4010f91b26b03e6e85b476752f4b3f', 'uploads/2e4010f91b26b03e6e85b476752f4b3f', 37, 3, 16),
(10000076, 'a nice set of drums', 'Drums', 'thumbs/thumb_6fed57a4afe4607327462f997206d269', '2019-05-09 06:06:55', 'uploads/6fed57a4afe4607327462f997206d269', 'uploads/6fed57a4afe4607327462f997206d269', 22, 2, 33),
(10000080, 'dsssss', 'asd', 'thumbs/thumb_228ebe145ed6ed8f5204a8475cf6a0c3', '2019-05-08 20:24:22', 'uploads/228ebe145ed6ed8f5204a8475cf6a0c3', 'uploads/228ebe145ed6ed8f5204a8475cf6a0c3', 22, 1, 1),
(10000082, 'Vase', 'Glass', 'thumbs/thumb_692dc69b849c16b7f2858550565b98ab', '2019-05-09 06:32:02', 'uploads/692dc69b849c16b7f2858550565b98ab', 'uploads/692dc69b849c16b7f2858550565b98ab', 37, 4, 1),
(10000083, 'Itsa me', 'Hi', 'thumbs/thumb_2858cbd7eb7c3bd4ee058c85beab3325', '2019-05-08 16:44:30', 'uploads/2858cbd7eb7c3bd4ee058c85beab3325', 'uploads/2858cbd7eb7c3bd4ee058c85beab3325', 37, 1, 0),
(10000084, 'IS fun', 'Coding', 'thumbs/thumb_c753e8fa78b2607d82413a662f184f0e', '2019-05-08 20:35:39', 'uploads/c753e8fa78b2607d82413a662f184f0e', 'uploads/c753e8fa78b2607d82413a662f184f0e', 37, 1, 1),
(10000085, 'Desc', 'Hoors', 'thumbs/thumb_2fc59bea7223239eb612206ef4c1c4d8', '2019-05-08 19:19:22', 'uploads/2fc59bea7223239eb612206ef4c1c4d8', 'uploads/2fc59bea7223239eb612206ef4c1c4d8', 37, 4, 0),
(10000086, 'I think everyone agrees', 'Tuut', 'thumbs/thumb_dbcc8144ca36125a81c51e12f31cd42d', '2019-05-10 15:47:10', 'uploads/dbcc8144ca36125a81c51e12f31cd42d', 'uploads/dbcc8144ca36125a81c51e12f31cd42d', 29, 4, 2),
(10000089, 'Nice', 'Bridge', 'thumbs/thumb_64b2c166bceedc8b403d15410d15e93a', '2019-05-09 06:06:55', 'uploads/64b2c166bceedc8b403d15410d15e93a', 'uploads/64b2c166bceedc8b403d15410d15e93a', 22, 1, 0),
(10000092, 'Rumpali', 'Teesi', 'thumbs/thumb_5c4e39e4c38a72f6c933ab21c36c09d9', '2019-05-10 15:46:12', 'uploads/5c4e39e4c38a72f6c933ab21c36c09d9', 'uploads/5c4e39e4c38a72f6c933ab21c36c09d9', 45, 1, 9),
(10000094, 'asddsa', 'adsdasadaa', 'thumbs/thumb_33507ffbff6f6cd87e06ca1443a1db3f', '2019-05-10 15:46:14', 'uploads/33507ffbff6f6cd87e06ca1443a1db3f', 'uploads/33507ffbff6f6cd87e06ca1443a1db3f', 37, 1, 1),
(10000095, 'asdas', 'Asdor', 'thumbs/thumb_f49cda9cea3a3d17584c2499e0fbe3d3', '2019-05-15 10:45:49', 'uploads/f49cda9cea3a3d17584c2499e0fbe3d3', 'uploads/f49cda9cea3a3d17584c2499e0fbe3d3', 37, 1, 0),
(10000096, 'Testest', 'Test2', 'thumbs/thumb_85876328904c54148832712a5304c53b', '2019-05-15 10:52:19', 'uploads/85876328904c54148832712a5304c53b', 'uploads/85876328904c54148832712a5304c53b', 37, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `UserID` int(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Admin` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `Username`, `Email`, `Password`, `Admin`) VALUES
(22, 'hullu153', 'arttujo@gmail.com', '$2b$10$90UWoSgksubAR/etBBndqeAYEu9yJJBO2Z6dhErK4UmdPD5a.po7y', NULL),
(29, 'joachig', 'joachig@metropolia.fi', '$2b$10$2.BQgkTDZJCBSWzfqCwpD.FF4a6sc6EfIZpsGKPlcUlFXdt.7R/Y2', 1),
(33, 'asda', 'sada@sda.com', '$2b$10$2bQPVZbx.yjfhXjU1VY0/uhfEUSolgmUKOfkeYIw1CIWAnfU.Xdb.', NULL),
(37, 'Make', 'Make@make.fi', '$2b$10$guaaWaBht9iYf88d/dWVUuSrZ9N9ansHKG99WCEt5qm8KL6PU8j4a', NULL),
(38, 'Test', 'test@test.fi', '$2b$10$Co6bFNtu2HFgkSmbhWBRee.uugOWv2xZkNTld8yXqjEQYk.jggf5K', 0),
(39, 'asdf', 'asf@asf.com', '$2b$10$DpATEaWecf29ViqtOSv8LuoDafs5rrIdEKqk5YrHx4VVQjKGBWb5u', 0),
(44, 'Asd1', 'asd@asd.fi', '$2b$10$qSNmWodW1LoYrqhJgBt42.gluMQANccIUJk0CX.j5zB5Ltm9tydS2', 0),
(45, 'ilkkamtk', 'il@hi.fi', '$2b$10$lU/aYSJvdAFPx/FH40mmDuOGP6B9x8XywZ9K5wYAOwQdA2BNycx9K', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Profilepic`
--
ALTER TABLE `Profilepic`
  ADD PRIMARY KEY (`PicID`),
  ADD KEY `Picuser` (`Picuser`);

--
-- Indexes for table `Uploadable`
--
ALTER TABLE `Uploadable`
  ADD PRIMARY KEY (`FileID`),
  ADD UNIQUE KEY `FileID` (`FileID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `ID` (`ID`),
  ADD KEY `FileID_2` (`FileID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Profilepic`
--
ALTER TABLE `Profilepic`
  MODIFY `PicID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `Uploadable`
--
ALTER TABLE `Uploadable`
  MODIFY `FileID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10000097;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Profilepic`
--
ALTER TABLE `Profilepic`
  ADD CONSTRAINT `Profilepic_ibfk_1` FOREIGN KEY (`Picuser`) REFERENCES `Users` (`UserID`);

--
-- Constraints for table `Uploadable`
--
ALTER TABLE `Uploadable`
  ADD CONSTRAINT `Uploadable_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`),
  ADD CONSTRAINT `Uploadable_ibfk_2` FOREIGN KEY (`ID`) REFERENCES `Category` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
