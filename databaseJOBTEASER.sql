-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: jobteaser_db
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
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `experience` text,
  `education` text,
  `cv` varchar(255) DEFAULT NULL,
  `applied_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `job_id` int DEFAULT NULL,
  `status` varchar(20) DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `fk_job_id` (`job_id`),
  CONSTRAINT `fk_job_id` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (2,'assile','zedan','0687965462','male','assile@example.com','I worked in Google','I studied in MIT','cv-1729351887928-810927318-Junior Numen_cv.pdf','2024-10-19 15:31:27',7,'en attente'),(3,'NUMEN','JUNIOR','+237 0681075098','male','numenjun@gmail.com','I worked in Google','I studied in MIT','cv-1729354832188-390488174-Junior Numen_cv.pdf','2024-10-19 16:20:32',9,'acceptée'),(4,'rayan','habes','0763595851','male','rayanhbs@gmail.com','rien','rien','cv-1729448994852-311709686-Junior Numen_cv.pdf','2024-10-20 18:29:54',12,'pending');
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Tech Solutions Inc.','123 Silicon Alley, New York, NY','https://www.techsolutions.com','2024-10-19 15:19:25','2024-10-19 15:19:25'),(2,'Data Insights LLC','456 Market Street, San Francisco, CA','https://www.datainsights.com','2024-10-19 15:19:25','2024-10-19 15:19:25'),(3,'Creative Designs Co.','789 Creative Lane, Austin, TX','https://www.creativedesigns.com','2024-10-19 15:19:25','2024-10-19 15:19:25'),(4,'InnovateX Corp.','101 Innovation Drive, Boston, MA','https://www.innovatex.com','2024-10-19 15:19:25','2024-10-19 15:19:25'),(5,'FinTech World','202 Finance Avenue, Chicago, IL','https://www.fintechworld.com','2024-10-19 15:19:25','2024-10-19 15:19:25'),(6,'Google','Villejuif','google.work.com','2024-10-20 16:22:58','2024-10-20 16:22:58'),(7,'epitech','Lekremelin bicetre','epitech.eu','2024-10-20 16:31:22','2024-10-20 16:31:22'),(8,'Nike','paris','nike.com','2024-10-20 16:31:58','2024-10-20 16:31:58'),(9,'amazon','marseil','amazon.com','2024-10-20 16:32:45','2024-10-20 16:32:45');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `short_description` varchar(500) NOT NULL,
  `detailed_description` text NOT NULL,
  `wages` decimal(10,2) NOT NULL,
  `place` varchar(255) NOT NULL,
  `working_time` varchar(255) NOT NULL,
  `company_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (6,'Software Engineer','Develop and maintain software applications.','You will work with a team of engineers to develop, test, and maintain software solutions. Experience with full stack development is required.',60000.00,'New York','Full-time',1,'2024-10-19 15:19:43','2024-10-19 15:19:43'),(7,'Data Analyst','Analyze and interpret complex data sets.','The role involves working with large data sets to extract insights. You will be using tools like SQL, Python, and Excel to perform data cleaning, analysis, and visualization.',50000.00,'San Francisco','Full-time',2,'2024-10-19 15:19:43','2024-10-19 15:19:43'),(8,'Project Manager','Lead software development projects.','As a project manager, you will be responsible for managing timelines, budgets, and resources for software development projects. PMP certification is a plus.',75000.00,'Remote','Full-time',1,'2024-10-19 15:19:43','2024-10-19 15:19:43'),(9,'UX/UI Designer','Design user interfaces and experiences.','You will collaborate with developers and product managers to design seamless user experiences. Experience with tools like Figma and Adobe XD is required.',55000.00,'Austin','Full-time',3,'2024-10-19 15:19:43','2024-10-19 15:19:43'),(10,'DevOps Engineer','Build and maintain infrastructure.','You will manage cloud infrastructure, automate deployments, and monitor performance. Experience with AWS and CI/CD pipelines is essential.',70000.00,'Boston','Full-time',1,'2024-10-19 15:19:43','2024-10-19 15:19:43'),(12,'vendeur','vendeur en magasin','faire le restock des pairs et les proposer au clients',1200.00,'centre commercial chatelet','3 jours/semaine',8,'2024-10-20 16:35:30','2024-10-20 16:35:30');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `role` varchar(20) DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (16,'admin@example.com','$2a$10$0wzwqFhIPNmM9euXKbWaou47MWLSmYUDG3wA7cxLaVr5mSSEyhYxW','2024-10-19 16:49:50','2024-10-19 16:49:50','Admin','User','1234567890','admin'),(17,'assile@example.com','$2a$10$z4ijtesAJ14GHr4u3ujrvuHCJBWSNbXpVDclMKbH2GrnMo1rbpBX2','2024-10-19 17:02:39','2024-10-19 17:02:39','assile','zedan','0687965462','user');
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

-- Dump completed on 2024-10-20 21:16:08
