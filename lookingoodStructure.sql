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
INSERT INTO `colors_data` VALUES (1,'Khaki'),(2,'Maroon'),(3,'Yellow'),(4,'Violet'),(5,'Maroon');
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
  CONSTRAINT `products_categories(FK)` FOREIGN KEY (`category_id`) REFERENCES `categories_data` (`id`),
  CONSTRAINT `products_colors(FK)` FOREIGN KEY (`colors_id`) REFERENCES `colors_data` (`id`),
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
  `password` varchar(50) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `admin` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_data`
--

LOCK TABLES `users_data` WRITE;
/*!40000 ALTER TABLE `users_data` DISABLE KEYS */;
INSERT INTO `users_data` VALUES (1,'Krystyna Dafydd','kdafydd0',8,'kdafydd0@npr.org','7 Farragut Hill','Budapest','Budapest','k0EZGD2aF','Sociis.jpeg','1'),(2,'Latrina Frosdick','lfrosdick1',8,'lfrosdick1@nhs.uk','16701 Waxwing Crossing','Budapest','Budapest','pkBX4kIa','VolutpatIn.xls','0'),(3,'Brigid Akeherst','bakeherst2',8,'bakeherst2@vimeo.com','661 Stoughton Circle','├ûsterg├Âtland','Finsp├Ñng','3PYDwQRj','MattisPulvinarNulla.jpeg','0'),(4,'Dora Larvin','dlarvin3',8,'dlarvin3@ifeng.com','43777 Hudson Crossing','├ûsterg├Âtland','Link├Âping','AAGaIEmFJ','Duis.avi','1'),(5,'Maddi Tipping','mtipping4',8,'mtipping4@xrea.com','73335 Fisk Center','├ûsterg├Âtland','Mj├Âlby','bN4SszM7EAJS','ANibh.avi','1'),(6,'Mason Shoard','mshoard5',8,'mshoard5@home.pl','5 2nd Road','├ûsterg├Âtland','Mj├Âlby','ysEGmf7d','Lobortis.mpeg','0'),(7,'Rosalynd Bowton','rbowton6',8,'rbowton6@cisco.com','55 Warner Road','├ûsterg├Âtland','Link├Âping','osEqRO','VulputateVitaeNisl.mp3','1'),(8,'Stormie Done','sdone7',8,'sdone7@facebook.com','38956 Golden Leaf Terrace','Budapest','Budapest','nlGRzyB','SitAmet.xls','1'),(9,'Dalia Ramlot','dramlot8',8,'dramlot8@unblog.fr','7 North Circle','Distrito Federal','El Mirador','QvHnMPyG','NatoquePenatibus.mp3','0'),(10,'Gorden Wudeland','gwudeland9',8,'gwudeland9@surveymonkey.com','80 Daystar Park','├ûsterg├Âtland','Norrk├Âping','KuEnvd','VolutpatConvallis.ppt','1');
/*!40000 ALTER TABLE `users_data` ENABLE KEYS */;
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
