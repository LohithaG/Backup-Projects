-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: pdc_automation
-- ------------------------------------------------------
-- Server version	5.7.18-log

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
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (45);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_information`
--

DROP TABLE IF EXISTS `product_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_information` (
  `checklist_id` int(11) NOT NULL,
  `check_pincode` bit(1) NOT NULL,
  `checklist_date` date NOT NULL,
  `courier_provider_name` varchar(255) NOT NULL,
  `created_by` varchar(255) NOT NULL,
  `customer_image` bit(1) NOT NULL,
  `dispatch_date` date DEFAULT NULL,
  `dispatched` bit(1) NOT NULL,
  `docket_number` varchar(255) NOT NULL,
  `entry_tax` double NOT NULL,
  `form_name` varchar(255) NOT NULL,
  `invoice_to_accountant` bit(1) NOT NULL,
  `mode_of_payment` varchar(255) NOT NULL,
  `msn` varchar(255) NOT NULL,
  `order_date` date DEFAULT NULL,
  `order_id` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `product_warranty` bit(1) NOT NULL,
  `sales_price` double NOT NULL,
  `shipment_price` double NOT NULL,
  `source` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `warranty_period` int(11) NOT NULL,
  PRIMARY KEY (`checklist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_information`
--

LOCK TABLES `product_information` WRITE;
/*!40000 ALTER TABLE `product_information` DISABLE KEYS */;
INSERT INTO `product_information` VALUES (2,'','2017-03-01','ems','mss','','2017-03-02','','1234-5683',33,'warrenty period','','Online','123','2017-03-02','1234-5683','PHILIPS SAMI THE SEAL NEBULIZER',1,'',23,23,'flipkart',1,3),(4,'','2017-03-01','fedex','mss','','2017-03-02','','1234-5684',22,'warrenty period','','Online','123','2017-03-01','1234-5684','AIR MATTRESS APP',1,'',22,11,'amazon',1,3),(5,'','2017-03-02','fedex','bharathi','','2017-03-04','','1234-5679',55,'warranty period','','Online','123','2017-03-03','1234-5679','GVS OXYGEN',1,'',55,55,'amazon',2,3),(7,'','2017-03-02','fedex','bharathi','','2017-03-02','','1234-5680',55,'warranty period','','Online','123','2017-03-02','1234-5680','ELECTRICAL WHEEL CHAIR',1,'',55,66,'amazon',2,3),(8,'','2017-03-02','gatti','bharathi','','2017-03-04','','1234-5681',33,'warranty period','','Online','123','2017-03-03','1234-5681',' OXYGEN ANALYZER',2,'',33,33,'ebay',2,2),(9,'','2017-03-01','ems','mss','','2017-03-02','','1234-5687',23,'warrenty period','','CashOnDelivery','143','2017-03-01','1234-5687','AIRFIT NASAL MASK FOR CPAP ',3,'',32,23,'flipkart',0,2),(10,'','2017-03-02','fedex','bharathi','','2017-03-04','','1234-5682',44,'warranty period','','Online','123','2017-03-02','1234-5682','PHILIPS REMSTAR AUTO CPAP 561S',2,'',44,34,'amazon',1,3),(43,'','2017-06-01','ems','Sunitha','','2017-06-01','','1234-3456',32,'warrenty period','','Online','111','2017-06-01','1234-3456','oxygen mask',1,'',34,23,'flipkart',2,2),(44,'','2017-06-02','ems','Sunitha','','2017-06-02','','123456789',22,'regtrhgfh','\0','Online','123','2017-06-02','123456789','mask',2,'',22,22,'amazon',0,1);
/*!40000 ALTER TABLE `product_information` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-03 15:55:05
