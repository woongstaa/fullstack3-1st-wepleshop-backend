-- MySQL dump 10.13  Distrib 8.0.27, for macos12.0 (arm64)
--
-- Host: localhost    Database: wepleShop
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('2ba10178-c764-4fa6-9b39-d27bfaef9553','7ae192fd105f0e04f7edac4e5f5f2c4bb4c2061905d30ace9252112c1df9b511','2021-12-28 16:20:00.367','20211228093826_first_init',NULL,NULL,'2021-12-28 16:20:00.076',1),('ddcdfa80-1a7c-4eee-9862-e56b555ff29c','2d495d7d946c900e2546cedc6e9f0f891aa8b9b1787b87c4ad74aeb61238fb16','2021-12-29 04:25:00.863','20211229042500_second_init',NULL,NULL,'2021-12-29 04:25:00.735',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'의류'),(2,'리빙'),(3,'문구');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_colors`
--

DROP TABLE IF EXISTS `product_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_colors`
--

LOCK TABLES `product_colors` WRITE;
/*!40000 ALTER TABLE `product_colors` DISABLE KEYS */;
INSERT INTO `product_colors` VALUES (1,'블랙','#000000'),(2,'그레이','#A8A9B0'),(3,'다크그레이','#333335'),(4,'오렌지','#FC4809'),(5,'아이보리','#F1F1F1'),(6,'네이비','#1A1D33'),(7,'스카이','#607C9D'),(8,'핑크','#E27F95'),(9,'브라운','#964B00'),(10,'로즈골드','#B76E79'),(11,'다크그린','#27291F');
/*!40000 ALTER TABLE `product_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `color_id` int DEFAULT NULL,
  `size_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `color_id` (`color_id`),
  KEY `size_id` (`size_id`),
  KEY `product_details_product_id_fkey` (`product_id`),
  CONSTRAINT `product_details_color_id_fkey` FOREIGN KEY (`color_id`) REFERENCES `product_colors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_details_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `product_details_size_id_fkey` FOREIGN KEY (`size_id`) REFERENCES `product_sizes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES (1,1,1,3,20),(2,1,1,4,30),(3,1,1,5,25),(4,2,2,3,10),(5,2,2,4,12),(6,2,2,5,32),(7,2,2,6,0),(8,3,1,3,25),(9,3,1,4,50),(10,3,1,5,8),(11,3,5,4,10),(12,3,5,5,5),(13,3,2,4,21),(14,3,2,5,11),(15,3,4,4,6),(16,3,4,5,2),(17,4,6,2,4),(18,4,6,3,5),(19,4,6,4,1),(20,4,1,2,17),(21,4,1,3,14),(22,4,1,4,15),(23,4,4,2,2),(24,4,4,3,5),(25,4,4,4,3),(26,4,5,3,5),(27,4,5,4,3),(28,4,5,5,10),(29,5,3,3,17),(30,5,3,4,8),(31,5,3,5,5),(32,6,1,3,1),(33,6,1,4,0),(34,6,1,5,2),(35,6,5,3,4),(36,6,5,4,7),(37,6,5,5,5),(38,6,7,4,3),(39,6,7,5,1),(40,6,7,6,5),(41,7,8,1,30),(42,7,9,1,30),(43,8,8,1,25),(44,9,7,1,40),(45,10,4,1,20),(46,11,5,1,50),(47,12,1,1,28),(48,13,5,1,21),(49,14,9,1,65),(50,15,5,1,80),(51,16,2,1,55),(52,17,NULL,NULL,67),(53,18,NULL,NULL,85),(54,19,NULL,NULL,73),(55,20,NULL,NULL,48),(56,21,1,10,30),(57,21,11,10,24),(58,22,2,11,37),(59,23,2,9,25),(60,23,10,9,35),(61,24,5,11,40),(62,25,9,10,48),(63,26,1,9,31),(64,26,4,9,18),(65,26,5,9,13);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_imgs`
--

DROP TABLE IF EXISTS `product_imgs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_imgs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img_url` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_imgs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_imgs`
--

LOCK TABLES `product_imgs` WRITE;
/*!40000 ALTER TABLE `product_imgs` DISABLE KEYS */;
INSERT INTO `product_imgs` VALUES (1,'/images/clothes/item1/1.jpeg',1),(2,'/images/clothes/item1/2.jpeg',1),(3,'/images/clothes/item1/3.jpeg',1),(4,'/images/clothes/item2/1.jpeg',2),(5,'/images/clothes/item2/2.jpeg',2),(6,'/images/clothes/item2/3.jpeg',2),(7,'/images/clothes/item3/1.jpeg',3),(8,'/images/clothes/item3/2.jpeg',3),(9,'/images/clothes/item3/3.jpeg',3),(10,'/images/clothes/item3/4.jpeg',3),(11,'/images/clothes/item4/1.jpeg',4),(12,'/images/clothes/item4/2.jpeg',4),(13,'/images/clothes/item4/3.jpeg',4),(14,'/images/clothes/item5/1.jpeg',5),(15,'/images/clothes/item5/2.jpeg',5),(16,'/images/clothes/item5/3.jpeg',5),(17,'/images/clothes/item6/1.jpeg',6),(18,'/images/clothes/item6/2.jpeg',6),(19,'/images/clothes/item6/3.jpeg',6),(20,'/images/clothes/item6/4.jpeg',6),(21,'/images/mug/item1/1.jpg',7),(22,'/images/mug/item1/2.jpg',7),(23,'/images/mug/item1/3.jpg',7),(24,'/images/mug/item1/4.jpg',7),(25,'/images/mug/item2/1.jpg',8),(26,'/images/mug/item2/2.jpg',8),(27,'/images/mug/item2/3.jpg',8),(28,'/images/mug/item2/4.jpg',8),(29,'/images/mug/item2/5.jpg',8),(30,'/images/mug/item3/1.jpg',9),(31,'/images/mug/item3/2.jpg',9),(32,'/images/mug/item3/3.jpg',9),(33,'/images/mug/item3/4.jpg',9),(34,'/images/mug/item3/5.jpg',9),(35,'/images/mug/item4/1.jpg',10),(36,'/images/mug/item4/2.jpg',10),(37,'/images/mug/item4/3.jpg',10),(38,'/images/mug/item4/4.jpg',10),(39,'/images/mug/item4/5.jpg',10),(40,'/images/mug/item5/1.jpg',11),(41,'/images/mug/item5/2.jpg',11),(42,'/images/mug/item5/3.jpg',11),(43,'/images/mug/item5/4.jpg',11),(44,'/images/mug/item5/5.jpg',11),(45,'/images/stationery/item1/1.jpg',12),(46,'/images/stationery/item1/2.jpg',12),(47,'/images/stationery/item1/3.jpg',12),(48,'/images/stationery/item1/4.jpg',12),(49,'/images/stationery/item1/5.jpg',12),(50,'/images/stationery/item1/6.jpg',12),(51,'/images/stationery/item2/1.jpg',13),(52,'/images/stationery/item2/2.jpg',13),(53,'/images/stationery/item2/3.jpg',13),(54,'/images/stationery/item2/4.jpg',13),(55,'/images/stationery/item2/5.jpg',13),(56,'/images/stationery/item2/6.jpg',13),(57,'/images/stationery/item3/1.jpg',14),(58,'/images/stationery/item3/2.jpg',14),(59,'/images/stationery/item3/3.jpg',14),(60,'/images/stationery/item3/4.jpg',14),(61,'/images/stationery/item4/1.jpg',15),(62,'/images/stationery/item4/2.jpg',15),(63,'/images/stationery/item4/3.jpg',15),(64,'/images/stationery/item4/4.jpg',15),(65,'/images/stationery/item5/1.jpg',16),(66,'/images/stationery/item5/2.jpg',16),(67,'/images/stationery/item5/3.jpg',16),(68,'/images/stationery/item5/4.jpg',16),(69,'/images/sticker/item1/1.jpg',17),(70,'/images/sticker/item1/2.jpg',17),(71,'/images/sticker/item1/3.jpg',17),(72,'/images/sticker/item1/4.jpg',17),(73,'/images/sticker/item2/1.jpg',18),(74,'/images/sticker/item2/2.jpg',18),(75,'/images/sticker/item2/3.jpg',18),(76,'/images/sticker/item2/4.jpg',18),(77,'/images/sticker/item2/5.jpg',18),(78,'/images/sticker/item3/1.jpg',19),(79,'/images/sticker/item3/2.jpg',19),(80,'/images/sticker/item3/3.jpg',19),(81,'/images/sticker/item3/4.jpg',19),(82,'/images/sticker/item4/1.jpg',20),(83,'/images/sticker/item4/2.jpg',20),(84,'/images/sticker/item4/3.jpg',20),(85,'/images/sticker/item4/4.jpg',20),(86,'/images/tumbler/item1/1.jpg',21),(87,'/images/tumbler/item1/2.jpg',21),(88,'/images/tumbler/item1/3.jpg',21),(89,'/images/tumbler/item1/4.jpg',21),(90,'/images/tumbler/item2/1.jpg',22),(91,'/images/tumbler/item2/2.jpg',22),(92,'/images/tumbler/item2/3.jpg',22),(93,'/images/tumbler/item2/4.jpg',22),(94,'/images/tumbler/item3/1.jpg',23),(95,'/images/tumbler/item3/2.jpg',23),(96,'/images/tumbler/item3/3.jpg',23),(97,'/images/tumbler/item3/4.jpg',23),(98,'/images/tumbler/item4/1.jpg',24),(99,'/images/tumbler/item4/2.jpg',24),(100,'/images/tumbler/item4/3.jpg',24),(101,'/images/tumbler/item4/4.jpg',24),(102,'/images/tumbler/item5/1.jpg',25),(103,'/images/tumbler/item5/2.jpg',25),(104,'/images/tumbler/item5/3.jpg',25),(105,'/images/tumbler/item6/1.jpg',26),(106,'/images/tumbler/item6/2.jpg',26),(107,'/images/tumbler/item6/3.jpg',26),(108,'/images/tumbler/item6/4.jpg',26);
/*!40000 ALTER TABLE `product_imgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sizes`
--

DROP TABLE IF EXISTS `product_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sizes`
--

LOCK TABLES `product_sizes` WRITE;
/*!40000 ALTER TABLE `product_sizes` DISABLE KEYS */;
INSERT INTO `product_sizes` VALUES (1,'ONE'),(2,'XS'),(3,'S'),(4,'M'),(5,'L'),(6,'XL'),(7,'XXL'),(8,'300ml'),(9,'350ml'),(10,'400ml'),(11,'450ml');
/*!40000 ALTER TABLE `product_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `category_id` int NOT NULL,
  `subcategory_id` int NOT NULL,
  `like_count` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `products_subcategory_id_fkey` (`subcategory_id`),
  CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `products_subcategory_id_fkey` FOREIGN KEY (`subcategory_id`) REFERENCES `sub_categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Noise 오버사이즈 후드 집업',45000,1,2,0),(2,'Oversized Heavy 후드 집업',42000,1,2,0),(3,'다운구스 패딩',85000,1,1,0),(4,'China 레터링 오버핏 티셔츠',23000,1,3,0),(5,'Heavy 오버핏 티셔츠',26000,1,3,0),(6,'무지 08베이식 후드티',38000,1,2,0),(7,'글레이즈 도넛 머그컵',13000,2,4,0),(8,'아기돼지 머그컵',11000,2,4,0),(9,'쿠키몬스터 머그컵',14000,2,4,0),(10,'커피 처방하는 머그컵',10000,2,4,0),(11,'하품하는 머그컵',15000,2,4,0),(12,'Modern Classic 볼펜',20000,3,6,0),(13,'분리형 플라스틱 수납함',17000,3,6,0),(14,'원목 빈티지 스탬프',7500,3,6,0),(15,'스몰사이즈 2B 지우개',3000,3,6,0),(16,'메탈 클래식 샤프',11000,3,6,0),(17,'음료 스티커',4500,3,7,0),(18,'도지코인 메모리얼 스티커',3800,3,7,0),(19,'세계도시 스티커',3500,3,7,0),(20,'개발자 스티커',5000,3,7,0),(21,'Vacuum Coffee 텀블러',23000,2,5,0),(22,'Zebra Stainless 텀블러',27000,2,5,0),(23,'Nicole 투명 텀블러',15000,2,5,0),(24,'Skinny Stainless 텀블러',20000,2,5,0),(25,'Woodie Original 텀블러',32000,2,5,0),(26,'Camping Logo 텀블러',29000,2,5,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `sub_categories_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES (1,'패딩',1),(2,'후드/집업',1),(3,'티셔츠',1),(4,'머그컵',2),(5,'텀블러',2),(6,'사무용품',3),(7,'스티커',3);
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_isLikes`
--

DROP TABLE IF EXISTS `users_isLikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_isLikes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `users_isLikes_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `users_isLikes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_isLikes`
--

LOCK TABLES `users_isLikes` WRITE;
/*!40000 ALTER TABLE `users_isLikes` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_isLikes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-04 14:59:23
