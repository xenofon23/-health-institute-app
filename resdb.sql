/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.4.22-MariaDB : Database - resdb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`resdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `resdb`;

/*Table structure for table `registers` */

DROP TABLE IF EXISTS `registers`;

CREATE TABLE `registers` (
  `name` varchar(100) DEFAULT NULL,
  `name_f` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `afm` varchar(9) NOT NULL,
  `amka` varchar(11) DEFAULT NULL,
  `credit_cart` varchar(16) DEFAULT NULL,
  `date` varchar(15) DEFAULT NULL,
  `addres` varchar(100) DEFAULT NULL,
  `comment` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`afm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `registers` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
