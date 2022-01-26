CREATE DATABASE  IF NOT EXISTS `fragance_life` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fragance_life`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 45.79.201.214    Database: fragance_life
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'CREED'),(2,'PACO RABANNE'),(3,'LACOSTE'),(4,'GIORGIO ARMANI'),(5,'DOLCE & GABBANA'),(6,'CAROLINA HERRERA'),(7,'VERSACE'),(8,'BVLGARI'),(9,'CHANEL'),(10,'GUCCI'),(11,'SHAKIRA');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorys`
--

DROP TABLE IF EXISTS `categorys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_name_id` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorys`
--

LOCK TABLES `categorys` WRITE;
/*!40000 ALTER TABLE `categorys` DISABLE KEYS */;
INSERT INTO `categorys` VALUES (1,'Administrador'),(3,'Cliente'),(2,'Vendedor');
/*!40000 ALTER TABLE `categorys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `percentage` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
INSERT INTO `discounts` VALUES (1,10),(2,20),(3,30),(4,40),(5,50),(6,60),(7,70),(8,80),(9,90),(10,100);
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_products`
--

DROP TABLE IF EXISTS `images_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_id` (`product_id`),
  CONSTRAINT `images_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_products`
--

LOCK TABLES `images_products` WRITE;
/*!40000 ALTER TABLE `images_products` DISABLE KEYS */;
INSERT INTO `images_products` VALUES (1,'silver-1.jpg',1),(2,'silver-2.jpg',1),(3,'silver-3.jpg',1),(4,'silver-4.jpg',1),(5,'vetiver-1.jpg',2),(6,'vetiver-2.jpg',2),(7,'vetiver-3.jpg',2),(8,'vetiver-4.jpg',2),(9,'invictus-1.jpg',3),(10,'invictus-2.jpg',3),(11,'invictus-3.jpg',3),(12,'invictus-4.jpg',3),(13,'lcred-1.jpg',4),(14,'lcred-2.jpg',4),(15,'lcred-3.jpg',4),(16,'lcred-4.jpg',4),(17,'acqua-1.jpg',5),(18,'acqua-2.jpg',5),(19,'acqua-3.jpg',5),(20,'acqua-4.jpg',5),(21,'aventus-1.jpg',6),(22,'aventus-2.jpg',6),(23,'aventus-3.jpg',6),(24,'aventus-4.jpg',6),(25,'lbh-1.jpg',7),(26,'lbh-2.jpg',7),(27,'lbh-3.jpg',7),(28,'lbh-4.jpg',7),(29,'vip-1.jpg',8),(30,'vip-2.jpg',8),(31,'vip-3.jpg',8),(32,'vip-4.jpg',8),(33,'eros-1.jpg',9),(34,'eros-2.jpg',9),(35,'eros-3.jpg',9),(36,'eros-4.jpg',9),(37,'one-1.jpg',10),(38,'one-2.jpg',10),(39,'one-3.jpg',10),(40,'one-4.jpg',10),(41,'vipclub-1.jpg',11),(42,'vipclub-2.jpg',11),(43,'vipclub-3.jpg',11),(44,'vipclub-4.jpg',11),(45,'boa-1.jpg',12),(46,'boa-2.jpg',12),(47,'boa-3.jpg',12),(48,'boa-4.jpg',12),(49,'chanel-1.jpg',13),(50,'chanel-2.jpg',13),(51,'chanel-3.jpg',13),(52,'chanel-4.jpg',13),(53,'lbm-1.jpg',14),(54,'lbm-2.jpg',14),(55,'lbm-3.jpg',14),(56,'lbm-4.jpg',14),(57,'lcpour-1.jpg',15),(58,'lcpour-2.jpg',15),(59,'lcpour-3.jpg',15),(60,'lcpour-4.jpg',15),(61,'bamboo-1.jpg',16),(62,'bamboo-2.jpg',16),(63,'bamboo-3.jpg',16),(64,'bamboo-4.jpg',16),(65,'rock-1.jpg',17),(66,'rock-2.jpg',17),(67,'rock-3.jpg',17),(68,'rock-4.jpg',17),(69,'coco-1.jpg',18),(70,'coco-2.jpg',18),(71,'coco-3.jpg',18),(72,'coco-4.jpg',18),(73,'gg-1.jpg',19),(74,'gg-2.jpg',19),(75,'gg-3.jpg',19),(76,'gg-4.jpg',19),(77,'theone-1.jpg',20),(78,'theone-2.jpg',20),(79,'theone-3.jpg',20),(80,'theone-4.jpg',20);
/*!40000 ALTER TABLE `images_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_user`
--

DROP TABLE IF EXISTS `product_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `products_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_id` (`users_id`),
  KEY `fk_products_id` (`products_id`),
  CONSTRAINT `product_user_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_user_ibfk_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_user`
--

LOCK TABLES `product_user` WRITE;
/*!40000 ALTER TABLE `product_user` DISABLE KEYS */;
INSERT INTO `product_user` VALUES (1,1,1);
/*!40000 ALTER TABLE `product_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `available` int NOT NULL,
  `price` double(10,2) NOT NULL,
  `brand_id` int NOT NULL,
  `smellFamily_id` int NOT NULL,
  `gender` varchar(45) NOT NULL,
  `promotion` tinyint NOT NULL,
  `discount_id` int NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_brand_id` (`brand_id`),
  KEY `fk_smellFamily_id` (`smellFamily_id`),
  KEY `fk_discount_id` (`discount_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`smellFamily_id`) REFERENCES `smellfamilys` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'CREED SILVER MOUNTAIN WATER',10,125000.00,1,1,'HOMBRE',1,1,'Silver Mountain Water de Creed es una fragancia de la familia olfativa Aromática para Hombres y Mujeres. Silver Mountain Water se lanzó en 1995. La Nariz detrás de esta fragrancia es Olivier Creed Six'),(2,'CREED ORIGINAL VETIVER',10,125000.00,1,1,'HOMBRE',1,1,'Fiel a su nombre, Original Vétiver reinventa dramáticamente el aroma tradicional de vetiver. Antes de Original Vétiver, solo una parte de la planta de vetiver se usaba en una fragancia. The House of C'),(3,'INVICTUS',10,125000.00,2,1,'HOMBRE',1,1,'Invictus para hombre. La encarnación del hombre en todo su poder. El héroe absoluto tocado por los dioses, listo para cualquier desafío. Invictus es el aroma de la victoria. Una punzante descarga de f'),(4,'LACOSTE RED',10,125000.00,3,1,'HOMBRE',1,1,'La fragancia para uso diario Lacoste Red se identifica con el hombre deportivo que libera su sensualidad y energía, irradiándola por toda la ciudad como la luz del sol del amanecer. Lacoste Red es un '),(5,'ACQUA DI GIO',10,125000.00,4,2,'HOMBRE',1,1,'Acqua di Giò es un perfume Cítrico-Acuático para un hombre masculino, con un delicioso aroma compuesto por bergamota de calabria, calone y cedro para crear un perfume cuya esencia es sofisticada, fres'),(6,'CREED AVENTUS',10,125000.00,1,2,'HOMBRE',1,1,'Introducida en 2010 y elaborada por la hábil mano del maestro perfumista de sexta generación Olivier Creed en colaboración con su hijo Erwin, esta fragancia se ha convertido en la fragancia más vendid'),(7,'LIGHT BLUE FOR MEN',10,125000.00,5,2,'HOMBRE',1,1,'La sensualidad mediterránea fue tomado en la fragancia Dolce&Gabbana Light Blue. Al hombre moderno le gusta cuidarse y ejercita su cuerpo atlético con deporte y su aroma complementa su personalidad. E'),(8,'212 VIP FOR MEN',10,125000.00,6,3,'HOMBRE',1,1,'212 VIP Men de Carolina Herrera es una fragancia de la familia olfativa Oriental Amaderada para Hombres Notas de Salida son lima (limón verde), caviar, pimienta, jengibre y maracuyá (fruta de la pasió'),(9,'EROS VERSACE',10,125000.00,7,3,'HOMBRE',1,1,'El nuevo eau de parfum Eros, masculino y confiado, es una fragancia para hombres atrevidos y apasionados. El aroma sensual fusiona notas amaderadas, orientales y frescas para crear un potente perfume '),(10,'ONE MILLION FOR MEN',10,125000.00,2,3,'HOMBRE',1,1,'Humor, sensualidad, estilo gentleman. Paco Rabanne apuesta 1 millón al gran retorno de la seducción masculina. El oro, materia predilecta de Paco Rabanne, reaparece aquí en un frasco asombroso en form'),(11,'212 VIP CLUB',10,125000.00,6,4,'MUJER',1,1,'Nuevos perfumes para mujeres 212 VIP Club Edition se inspira en la escena de la vida nocturna de Nueva York. La fragancia se anuncia como cautivadora, sensual y urbano, es una fragancia de la familia '),(12,'BVLGARI OMNIA AMATISTA',10,125000.00,8,4,'MUJER',1,1,'Omnia Amethyste de Bvlgari es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Omnia Amethyste se lanzó en 2006. La Nariz detrás de esta fragrancia es Alberto Morillas. Las'),(13,'CHANEL N°5',10,125000.00,9,4,'MUJER',1,1,'Chanel No 5 Eau de Parfum de Chanel es una fragancia de la familia olfativa Floral Aldehídica para Mujeres. Chanel No 5 Eau de Parfum se lanzó en 1986. La Nariz detrás de esta fragrancia es Jacques Po'),(14,'LIGHT BLUE FOR WOMEN',10,125000.00,5,4,'MUJER',1,1,'Lanzada en 2001, Light Blue de Dolce and Gabbana es un perfume informal, fresco, afrutado con un relumbrante aroma floral que evoca el espíritu del verano. Una nota pícara de manzana verde emana de la'),(15,'EAU DE LACOSTE L.12.12 POUR ELLE SPARKLING',10,125000.00,3,5,'MUJER',1,1,'Fragancia irresistible para mujeres. Una fragancia dulce y chispeante para transmitir esa alegre \'Joie de vivre\'. Capturando la sofisticada simplicidad de su homólogo masculino original, el Eau de Lac'),(16,'GUCCI BAMBOO',10,125000.00,10,5,'MUJER',1,1,'Gucci Bamboo es una fragancia intensa, elegante y suave al mismo tiempo. Su brillante preludio debe su olor a la alegre bergamota. El corazón combina las intensamente dulces flores del árbol ylang-yla'),(17,'ROCK! BY SHAKIRA',10,125000.00,11,5,'MUJER',1,1,'Rock! es un homenaje a la música que mueve el mundo. Una fragancia femenina inspirada en los momento de expectación y emoción al subir al escenario. Una composición fresca y marcadamente floral-afruta'),(18,'COCO CHANEL',10,125000.00,9,3,'MUJER',1,1,'La composición se construye en torno a un acorde de ámbar complementado con aromas florales y esencias de cuero y madera. La composición abre con una mezcla de cilantro, mandarina, melocotón, dulce ja'),(19,'GOOD GIRL',10,125000.00,6,3,'MUJER',1,1,'El perfume Good Girl by Carolina Herrera, que representa la dualidad de la mujer moderna, es misterioso y elegante a un tiempo. Una fragancia atrevida y sofisticada creada para la femme fatale enigmát'),(20,'THE ONE BY DOLCE & GABANNA',10,125000.00,5,3,'MUJER',1,1,'Un comienzo luminoso y vibrante que mezcla mandarina, melocotón y lichi. En el corazón florido y rico se unen la azucena, el muguete y el jazmín más un toque de ciruela. En el fondo, las notas amadera');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_car`
--

DROP TABLE IF EXISTS `shopping_car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `products_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_id` (`users_id`),
  KEY `fk_products_id` (`products_id`),
  CONSTRAINT `shopping_car_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_car_ibfk_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_car`
--

LOCK TABLES `shopping_car` WRITE;
/*!40000 ALTER TABLE `shopping_car` DISABLE KEYS */;
INSERT INTO `shopping_car` VALUES (1,1,1);
/*!40000 ALTER TABLE `shopping_car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smellfamilys`
--

DROP TABLE IF EXISTS `smellfamilys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smellfamilys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smellfamilys`
--

LOCK TABLES `smellfamilys` WRITE;
/*!40000 ALTER TABLE `smellfamilys` DISABLE KEYS */;
INSERT INTO `smellfamilys` VALUES (1,'AMADERADO'),(2,'FRESCO'),(3,'ORIENTAL'),(4,'FLORAL'),(5,'FRUTAL');
/*!40000 ALTER TABLE `smellfamilys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `document` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `category_id` int NOT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categorys` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1057602847,'Nicolás ','Nossa','nico568_97@hotmail.com','12345',3,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-25 15:31:43
