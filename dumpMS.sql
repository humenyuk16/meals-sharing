-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: 127.0.0.1    Database: meal_sharing
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `Meal`
--

DROP TABLE IF EXISTS `Meal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Meal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `location` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `when` datetime DEFAULT CURRENT_TIMESTAMP,
  `max_reservations` int NOT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Meal`
--

LOCK TABLES `Meal` WRITE;
/*!40000 ALTER TABLE `Meal` DISABLE KEYS */;
INSERT INTO `Meal` VALUES (1,'Cheescake','A dessert made with a soft fresh cheese, eggs, and sugar. It  have a  base made from crushed cookies','Cheescake Factory',60.00,'2024-02-14 16:30:00',5,'2024-02-14 12:15:00','https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D'),(2,'Chicken curry','A typical curry from the India. Consists of chicken stewed in an onion and tomato-based sause, flavoured with garlic, ginger, tomato puree, chili pebers','Indian Village',19.99,'2024-05-05 12:30:00',6,'2024-03-02 19:15:00','https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(3,' Greek Salad','A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious.','789 Main St',8.99,'2024-10-02 13:00:00',10,'2024-10-02 17:05:04','https://images.unsplash.com/photo-1588471790208-16825e6bcc24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVrJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D'),(4,'Fish n Chips','A hot dish consisting of fried fish in batter, served with chips.','123 Main St',12.99,'2024-07-02 12:10:00',10,'2024-08-02 14:45:00','https://images.unsplash.com/photo-1633426297219-92cf521bc2d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZpc2glMjBhbmQlMjBjaGlwcyUyMGZvb2R8ZW58MHx8MHx8fDA%3D'),(5,'Chocolate Brownie ','Brownies are a type of chocolate cake from the United States that often include nuts.','321 Main St',15.99,'2024-10-02 11:30:00',8,'2024-10-02 15:30:00','https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hvY29sYXRlJTIwQnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D'),(6,'Chicken Shawarma',' Is commonly stuffed into a pita with lettuce, onion, tomatoes, and cucumber and drizzled with a garlicky yogurt sauce and that\'s what we recommend here. This is the most classic way to eat it, but don\'t let that limit you.','456 Main St',9.99,'2024-11-02 10:45:00',7,'2024-09-02 12:55:03','https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'),(7,'Apple Pie','Whole pie. Filled above the rim with fresh granny smith apples, sweetened with sugar and spices to enhance the flavor of the apples to perfection.','NY Pie',11.00,'2024-10-02 15:30:00',15,'2024-03-02 19:15:00','https://images.unsplash.com/photo-1545396635-011a9a6a5650?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEFwcGxlJTIwUGllfGVufDB8fDB8fHww'),(8,'Danish meatballs','Danish meatballs  are very popular in Denmark and are served both for lunch and dinner. The meatballs consist of equal calf and pork, flour, milk, eggs, onions and spices.','Paprico',19.99,'2024-04-12 12:30:00',5,'2024-03-02 19:15:00','https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGFuaXNoJTIwbWVhdGJhbGxzfGVufDB8fDB8fHww'),(9,'Chocolate cupcakes','Moist and rich, each bite is a symphony of cocoa flavors. Topped with creamy chocolate frosting, they\'re a delightful treat for any occasion.','Chocolate Factory',10.00,'2024-02-20 15:30:00',10,'2024-02-03 11:15:00','https://images.unsplash.com/photo-1616151030755-76f6cd987a06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fENob2NvbGF0ZSUyMGN1cGNha2VzfGVufDB8fDB8fHww'),(10,'Borsch','Borsch is a national Ukrainian dish, a hearty beet-based soup packed with flavors from cabbage, potatoes, and often meat. It\'s served hot with a dollop of sour cream and fresh herbs, embodying the essence of Ukrainian comfort food.','Ukrainian Kitchen',35.00,'2024-04-02 15:30:00',15,'2024-03-02 19:15:00','https://cdn.pixabay.com/photo/2022/07/15/18/41/ukrainian-food-7323773_1280.jpg'),(11,'Humburger','A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world. ','BBQ Place',17.99,'2024-04-08 08:00:00',20,'2024-04-07 10:00:00','https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2R8ZW58MHx8MHx8fDA%3D'),(12,'Sushi','A Japanese dish that features medium-grained rice cooked in vinegar, served with raw or cooked seafood and a variety of toppings or fillings.','Young Fu',15.99,'2024-07-05 10:00:00',10,'2024-04-15 12:45:00','https://images.unsplash.com/photo-1694763892273-86fccd8154d0?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(16,'Gnochi','Chines food','Yang Fou',15.30,'2024-05-02 00:00:00',30,'2024-05-02 08:25:25','https://images.unsplash.com/photo-1559948271-7d5c98d2e951?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(27,'Pasta slad','amazing tasty salad','London',20.00,'2024-05-05 00:00:00',10,'2024-05-03 07:51:57','https://images.unsplash.com/photo-1543161252-42609aa0e3d2?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
/*!40000 ALTER TABLE `Meal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reservation`
--

DROP TABLE IF EXISTS `Reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number_of_guests` int NOT NULL,
  `meal_id` int NOT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_meal_id` (`meal_id`),
  CONSTRAINT `fk_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reservation`
--

LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Reservation` DISABLE KEYS */;
INSERT INTO `Reservation` VALUES (1,2,3,'2024-02-20 22:09:10','113227890','Jon Silk','silk@example.com'),(4,1,4,'2024-08-02 14:45:00','1234567890','John Doe','doejohn@example.com'),(6,2,6,'2024-09-02 12:55:03','1234567890','Frederik Jensen','jensen@example.com'),(7,3,6,'2024-02-14 12:00:00','1234567890','Anastasiia Humeniuk','humeniuk@example.com'),(8,4,5,'2024-02-20 22:09:10','1133567890','Sofia Simpson','simpsonL@example.com'),(9,5,1,'2024-02-20 22:09:10','12340987','Fred','fred@example.com'),(10,1,1,'2024-04-18 10:45:41','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(11,1,1,'2024-04-18 10:47:17','0978361801','Sofiia ','debramorgaan@gmail.com'),(12,1,1,'2024-04-18 10:47:20','0978361801','Sofiia ','debramorgaan@gmail.com'),(13,2,8,'2024-04-18 11:04:40','45354355','Olek','olek@frfr.com'),(14,1,8,'2024-04-18 11:05:32','','',''),(15,2,5,'2024-04-18 11:14:45','59443343','Sofi','fodd@ffk.com'),(16,1,3,'2024-04-18 11:27:18','689404','lara','jfkv@ff.com'),(17,1,4,'2024-04-18 11:57:30','89865789','Sofia','sofia@hfk.com'),(18,1,4,'2024-04-18 12:00:41','977557879','Don','kdkk@kd.com'),(19,1,4,'2024-04-18 12:03:58','98654434','Son','767899@fof.com'),(20,1,4,'2024-04-18 12:09:32','999','ddd','debramorgaan@gmail.com'),(21,1,8,'2024-04-18 18:16:43','0978361801','Anna','kjdkdk@jdk.com'),(22,1,8,'2024-04-18 18:24:52','99494033','Din','kidjdf@jfkf.com'),(43,1,2,'2024-04-18 20:11:47','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(44,1,2,'2024-04-18 20:23:01','93606328','a','debramorgaan@gmail.com'),(45,1,1,'2024-04-18 20:26:05','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(46,1,1,'2024-04-18 20:27:21','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(47,1,1,'2024-04-18 20:28:08','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(48,1,1,'2024-04-18 20:31:53','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(49,1,1,'2024-04-18 20:36:57','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(50,1,1,'2024-04-18 20:38:22','0978361801','add','debramorgaan@gmail.com'),(51,1,1,'2024-04-18 20:44:25','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(52,1,1,'2024-04-18 20:54:33','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(53,1,1,'2024-04-19 08:44:41','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(54,1,1,'2024-04-19 08:47:55','494897854','Anna','debramorgaan@gmail.com'),(55,1,2,'2024-04-19 09:55:45','4e55535','ddff','debramorgaan@gmail.com'),(56,4,11,'2024-04-19 20:01:26','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(57,1,1,'2024-04-19 20:33:53','3433434','sdsddd','debramorgaan@gmail.com'),(58,1,1,'2024-04-19 20:35:02','34322','dddd','debramorgaan@gmail.com'),(59,1,12,'2024-04-19 22:05:30','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(60,1,12,'2024-04-19 22:09:50','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(61,1,12,'2024-04-19 22:10:37','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(62,1,12,'2024-04-19 22:14:15','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(63,1,12,'2024-04-19 22:15:44','9900','kkk','debramorgaan@gmail.com'),(64,1,12,'2024-04-19 22:24:01','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(65,1,12,'2024-04-19 22:25:28','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(66,1,12,'2024-04-19 22:30:46','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(67,1,12,'2024-04-20 07:35:47','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(68,1,12,'2024-04-20 07:41:15','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(69,1,12,'2024-04-20 07:42:55','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(70,1,12,'2024-04-20 07:43:58','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(71,1,12,'2024-04-20 07:44:23','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(72,1,12,'2024-04-20 07:49:18','93606328','Anastasiia Humeniuk','humenyuk.nastia@icloud.com'),(73,1,12,'2024-04-20 07:50:05','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(74,1,12,'2024-04-20 07:53:34','9868','Anastasiia Humeniuk','debramorgaan@gmail.com'),(75,1,12,'2024-04-20 07:54:19','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(76,1,12,'2024-04-20 07:55:38','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(77,1,12,'2024-04-20 07:56:22','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(78,1,12,'2024-04-20 08:00:19','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(79,1,12,'2024-04-20 08:01:25','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(80,1,12,'2024-04-20 08:25:20','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(81,1,12,'2024-04-20 08:25:22','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(82,1,12,'2024-04-20 08:25:22','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(83,1,12,'2024-04-20 08:25:22','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(84,1,12,'2024-04-20 08:25:22','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(85,1,12,'2024-04-20 08:25:23','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(86,1,12,'2024-04-20 08:30:42','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(87,1,12,'2024-04-20 08:35:21','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(88,1,12,'2024-04-20 08:37:44','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(89,1,12,'2024-04-20 08:38:00','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(90,1,12,'2024-04-20 08:38:06','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(91,1,12,'2024-04-20 08:39:03','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(92,1,1,'2024-04-20 17:33:19','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(93,1,2,'2024-04-20 20:40:30','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(94,1,2,'2024-04-21 10:52:19','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(95,4,1,'2024-05-03 07:05:44','0978361801','Anastasiia Humeniuk','debramorgaan@gmail.com'),(96,5,2,'2024-05-03 07:47:48','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(97,6,3,'2024-05-03 09:05:11','8367846389','Sofiia','dkjvkd@gmail.com'),(98,1,3,'2024-05-03 09:08:17','9868767','Anna','debramorgaan@gmail.com'),(99,1,3,'2024-05-03 09:13:45','93606328','Anastasiia Humeniuk','debramorgaan@gmail.com'),(100,2,3,'2024-05-03 09:17:13','7656576586','Anastasiia Humeniuk','debramorgaan@gmail.com'),(101,1,3,'2024-05-03 09:18:10','786765758','Anastasiia Humeniuk','jhvhgjkk@gmail.com'),(102,1,3,'2024-05-03 09:18:11','786765758','Anastasiia Humeniuk','jhvhgjkk@gmail.com'),(103,1,3,'2024-05-03 09:19:32','767689','jjjj','hgfgf@gmail.com'),(104,1,3,'2024-05-03 09:19:33','767689','jjjj','hgfgf@gmail.com'),(105,1,3,'2024-05-03 09:19:51','987897676','kjhjk','oooo@gmail.com'),(106,1,3,'2024-05-03 09:21:40','87988','rytfu','kokm@gmail.com'),(107,2,3,'2024-05-03 09:23:02','353353','sdsf','dgdvdv@icloud.com'),(108,1,3,'2024-05-03 09:27:46','23424','assa','dffdf@gmail.com'),(109,1,3,'2024-05-03 09:29:12','342424','assad','sdsdsd@gmail.com'),(110,1,3,'2024-05-03 09:31:00','22424','sdd','sdsd@gmail.com'),(111,3,3,'2024-05-03 09:36:49','876767','kjhjl','debramorgaan@gmail.com'),(112,1,3,'2024-05-03 09:39:24','987876','jhgjhk','jhjh@gmail.com'),(113,2,3,'2024-05-03 09:43:49','87675665','jjh','jvbv@gmail.com'),(114,1,3,'2024-05-03 09:46:28','98787656','jkgjhgk','hgfgf@gmail.com'),(115,1,3,'2024-05-03 09:53:58','875675','hgfg','bgfg@gmail.com');
/*!40000 ALTER TABLE `Reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `meal_id` int NOT NULL,
  `stars` int NOT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_meal_id_review` (`meal_id`),
  CONSTRAINT `fk_meal_id_review` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
INSERT INTO `Review` VALUES (1,'Like at home','Apple pie was amazing, it is taste like at home',1,5,'2024-02-14 12:00:00'),(2,'I love it','Most delicious cupcake',9,5,'2024-03-02 11:00:00'),(3,'very good salad','If you want be strong, then you  definitely should try this salad:) ',3,5,'2024-10-02 17:05:04'),(6,'Best of the best','This is my favourite sawarma in the city, I recommend',6,5,'2024-09-02 12:55:03'),(7,'Amazing Food','Apple pie was delicious, highly recommended',1,5,'2024-02-14 12:00:00'),(8,'Amazing curry','one of the best which I have ever had',2,5,'2024-03-01 11:00:00'),(9,'Goooooood','I like thhis meal and it is so delicious, definetly I\'ll be back for another porcion',6,5,'2024-03-04 22:00:00'),(29,'hntght','nhfhgf',2,1,'2024-04-28 12:02:38'),(30,'Amazinggggg!!!!','delicious brownie which have amazing chocolate taste. Definitely try it again!',5,5,'2024-05-02 07:39:06'),(31,'Amazing food','all good',1,5,'2024-05-03 07:04:59'),(32,'Amaxing curry','Good food',2,1,'2024-05-03 07:47:10'),(33,'Super','I love it',3,5,'2024-05-03 09:31:21'),(34,'Super','I love it',3,5,'2024-05-03 09:48:34'),(35,'Goooooood','I like thhis meal and it is so delicious, definetly I\'ll be back for another porcion',7,5,'2024-03-04 22:00:00'),(36,'Goooooood','I like thhis meal and it is so delicious, definetly I\'ll be back for another porcion',7,5,'2024-03-04 22:00:00');
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-07  9:25:14
