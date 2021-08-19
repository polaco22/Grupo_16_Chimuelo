
DROP DATABASE IF EXISTS `lookingood`;
CREATE DATABASE `lookingood`;
USE `lookingood`;

-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: lookingood
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.19-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_data`
--

DROP TABLE IF EXISTS `cart_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `date` date NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_data_FK` (`userId`),
  KEY `cart_data_FK_1` (`productId`),
  CONSTRAINT `cart_data_FK` FOREIGN KEY (`userId`) REFERENCES `users_data` (`id`),
  CONSTRAINT `cart_data_FK_1` FOREIGN KEY (`productId`) REFERENCES `products_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_data`
--

LOCK TABLES `cart_data` WRITE;
/*!40000 ALTER TABLE `cart_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_detail`
--

DROP TABLE IF EXISTS `cart_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_detail` (
  `id` int(11) NOT NULL,
  `cartid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_detail_FK` (`cartid`),
  CONSTRAINT `cart_detail_FK` FOREIGN KEY (`cartid`) REFERENCES `cart_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_detail`
--

LOCK TABLES `cart_detail` WRITE;
/*!40000 ALTER TABLE `cart_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_data`
--

DROP TABLE IF EXISTS `categories_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_data`
--

LOCK TABLES `categories_data` WRITE;
/*!40000 ALTER TABLE `categories_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors_data`
--

DROP TABLE IF EXISTS `colors_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors_data`
--

LOCK TABLES `colors_data` WRITE;
/*!40000 ALTER TABLE `colors_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_data`
--

DROP TABLE IF EXISTS `products_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `colors_id` int(11) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_data_FK` (`colors_id`),
  KEY `products_data_FK_1` (`category_id`),
  CONSTRAINT `products_data_FK` FOREIGN KEY (`colors_id`) REFERENCES `colors_data` (`id`),
  CONSTRAINT `products_data_FK_1` FOREIGN KEY (`category_id`) REFERENCES `categories_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_data`
--

LOCK TABLES `products_data` WRITE;
/*!40000 ALTER TABLE `products_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_data`
--

DROP TABLE IF EXISTS `users_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `dni` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `domicilio` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `admin` boolean NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_data`
--

LOCK TABLES `users_data` WRITE;
/*!40000 ALTER TABLE `users_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_data`
--

DROP TABLE IF EXISTS `img_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_data`
--

LOCK TABLES `img_data` WRITE;
/*!40000 ALTER TABLE `img_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `img_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imgproduct_data`
--

DROP TABLE IF EXISTS `imgproduct_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imgproduct_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `imgProduct_data_FK` (`imgId`),
  KEY `imgProduct_data_FK_1` (`productId`),
  CONSTRAINT `imgProduct_data_FK` FOREIGN KEY (`imgId`) REFERENCES `img_data` (`id`),
  CONSTRAINT `imgProduct_data_FK_1` FOREIGN KEY (`productId`) REFERENCES `products_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgproduct_data`
--

LOCK TABLES `imgproduct_data` WRITE;
/*!40000 ALTER TABLE `imgproduct_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `imgproduct_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'lookingood'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-14 17:07:14