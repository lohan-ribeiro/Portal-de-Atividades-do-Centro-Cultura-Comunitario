-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: projeto_db
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `atividades`
--

DROP TABLE IF EXISTS `atividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `turno` enum('MATUTINO','VESPERTINO','NOTURNO') NOT NULL,
  `idade` varchar(255) DEFAULT NULL,
  `modalidade_id` int NOT NULL,
  `nivel_id` int DEFAULT NULL,
  `horario` varchar(255) NOT NULL,
  `dias_semana` varchar(255) NOT NULL,
  `analista` varchar(255) DEFAULT NULL,
  `local` varchar(255) DEFAULT NULL,
  `disponivel_em` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modalidade_id` (`modalidade_id`),
  KEY `nivel_id` (`nivel_id`),
  CONSTRAINT `atividades_ibfk_1` FOREIGN KEY (`modalidade_id`) REFERENCES `modalidades` (`id`),
  CONSTRAINT `atividades_ibfk_2` FOREIGN KEY (`nivel_id`) REFERENCES `niveis` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividades`
--

LOCK TABLES `atividades` WRITE;
/*!40000 ALTER TABLE `atividades` DISABLE KEYS */;
INSERT INTO `atividades` VALUES (1,'MATUTINO','Adulto',14,8,'7h às 8h','Seg/Quarta/Sexta','Erika','Sala de Dança','CEU - Rosa da China'),(2,'MATUTINO','Adulto',14,8,'8h às 9h','Terça/Quinta','Erika','Sala de Dança','CEU - Rosa da China'),(3,'MATUTINO','A partir de 15 anos',29,6,'7h às 8h','Seg/Quarta/Sexta','Nelson','Musculação','CEU - Rosa da China'),(4,'MATUTINO','A partir de 15 anos',29,6,'7h às 8h','Terça/Quinta','Nelson','Musculação','CEU - Rosa da China'),(5,'MATUTINO','A partir de 15 anos',29,8,'9h às 10h','Seg/Qua/Sex','Nelson','Musculação','CEU - Rosa da China'),(6,'MATUTINO','A partir de 15 anos',29,6,'10h às 11h','Qua/Sex','Nelson','Musculação','CEU - Rosa da China'),(7,'MATUTINO','A partir de 15 anos',29,6,'8h às 9h','Seg/Quarta/Sexta','Nelson','Musculação','CEU - Rosa da China'),(8,'MATUTINO','Adulto',32,8,'8h às 9h','Segunda/Quarta/Sexta','Elaine','Tatame','CEU - Rosa da China'),(9,'MATUTINO','Acima de 14 anos',10,8,'8h às 9h','Quarta/Sexta','Juliana','Pátio do Teatro/Externo','CEU - Rosa da China'),(10,'MATUTINO','Acima de 14 anos',11,8,'9h às 10h','Terça/Quinta/Sábado','Juliana','Pátio do Teatro/Externo','CEU - Rosa da China'),(11,'MATUTINO','Adulto',16,10,'8h às 9h','Terça/Quinta/Sábado','Juliana','Externo','CEU - Rosa da China'),(12,'MATUTINO','Livre',1,8,'7h às 8h','Terça/Quinta','Erika','Sala de Dança','CEU - Rosa da China'),(13,'MATUTINO','Livre',1,8,'8h às 9h','Segunda/Quarta/Sexta','Erika','Sala de Dança','CEU - Rosa da China'),(14,'MATUTINO','Livre',1,8,'9h às 10h','Terça/Quinta','Elaine','Tatame','CEU - Rosa da China'),(15,'MATUTINO','Livre',1,8,'9h às 10h','Segunda/Quarta/Sexta','Elaine','Sala de Dança','CEU - Rosa da China'),(16,'MATUTINO','Livre',20,8,'10h às 11h','Terça','Elaine','Sala de Jogos','CEU - Rosa da China'),(17,'MATUTINO','Acima de 60 anos',22,8,'10h às 11h','Segunda/Quarta','Elaine','Sala de Dança','CEU - Rosa da China'),(18,'MATUTINO','Adulto',36,8,'11h às 12h','Terça/Quinta','Elaine','Sala de Dança','CEU - Rosa da China'),(19,'MATUTINO','Adulto',25,8,'11h às 12h','Segunda/Quarta','Elaine','Sala de Dança','CEU - Rosa da China'),(20,'MATUTINO','Adulto',2,8,'9h às 10h','Terça/Quinta','Elaine','Sala de Dança','CEU - Rosa da China'),(21,'MATUTINO','Adulto',44,8,'9h às 10h30','Terça/Quinta','Erika','Ginásio','CEU - Rosa da China'),(22,'MATUTINO','Adulto',21,8,'9h às 10h','Quarta/Sexta','Juliana','Sala de Dança','CEU - Rosa da China'),(23,'MATUTINO','Adulto',13,NULL,'09h às 10h','Segunda','Erika','Tatame','CEU - Rosa da China'),(24,'MATUTINO','Adulto',24,2,'09h às 10h','Quarta/Sexta','Erika','Piscina','CEU - Rosa da China'),(25,'MATUTINO','Adulto',24,2,'11h às 12h','Quarta/Sexta','Juliana','Piscina','CEU - Rosa da China'),(26,'MATUTINO','Adulto',30,8,'10h às 11h','Segunda/Quarta/Sexta','Erika','Piscina','CEU - Rosa da China'),(27,'MATUTINO','De 6 a 10 anos',30,7,'10h30 às 11h30','Terça/Quinta','Erika','Piscina','CEU - Rosa da China'),(28,'MATUTINO','Adulto',33,8,'10h às 11h','Quarta/Sexta/Sábado','Juliana','Tatame','CEU - Rosa da China'),(29,'MATUTINO','Adulto',33,8,'11h às 12h','Terça/Quinta','Juliana','Tatame','CEU - Rosa da China'),(30,'MATUTINO','Avaliar',34,8,'11h às 12h','Segunda/Quarta/Sexta','Erika','Sala de Jogos','CEU - Rosa da China'),(31,'VESPERTINO','Avaliar o aluno',34,8,'13h30 às 14h30','Segunda','Erika','Sala de Jogos','CEU - Rosa da China'),(32,'VESPERTINO','Avaliar o aluno',34,1,'14h30 às 15h30','Segunda/Quarta','Erika','Sala de Jogos','CEU - Rosa da China'),(33,'VESPERTINO','De 11 a 17 anos',30,NULL,'12h30 às 13h30','Segunda/Quarta/Sexta','Erika','Piscina','CEU - Rosa da China'),(34,'VESPERTINO','Livre',1,8,'13h30 às 14h30','Terça/Quinta','Erika','Sala de Dança','CEU - Rosa da China'),(35,'VESPERTINO','Adulto',14,8,'14h30 às 15h30','Terça/Quinta','Erika','Sala de Dança','CEU - Rosa da China'),(36,'VESPERTINO','Acima de 50 anos',27,8,'16h às 17h','Terça/Quinta','Reginaldo','Sala Zen','CEU - Rosa da China'),(37,'VESPERTINO','Juvenil',19,17,'15h30 às 16h30','Quarta/Sexta','Gleice','Sala G.A','CEU - Rosa da China'),(38,'VESPERTINO','Adulto',18,17,'16h30 às 17h30','Quarta/Sexta','Gleice','Sala G.A','CEU - Rosa da China'),(39,'VESPERTINO','09 à 12 anos',3,8,'12h às 13h','Terça/Quinta','Gleice','Ginásio','CEU - Rosa da China'),(40,'VESPERTINO','13 à 15 anos',3,11,'13h às 14h30','Terça/Quinta','Gleice','Ginásio','CEU - Rosa da China'),(41,'VESPERTINO','14 a 16 anos',3,14,'14h30 às 16h','Terça/Quinta','Gleice','Ginásio','CEU - Rosa da China'),(42,'VESPERTINO','12 a 15 anos',43,8,'16h30 às 17h30','Terça/Quinta/Sábado','Gleice','Ginásio','CEU - Rosa da China'),(43,'VESPERTINO','12 a 15 anos',43,8,'17h30 às 18h30','Terça/Quinta/Sábado','Gleice','Ginásio','CEU - Rosa da China'),(44,'VESPERTINO','Sub 17 Anos',43,NULL,'18h30 às 19h30','Terça/Quinta/Sábado','Gleice','Ginásio','CEU - Rosa da China'),(45,'VESPERTINO','14 a 17 anos',15,18,'14h30 às 15h30','Quarta/Sexta','Reginaldo','Quadra Externa','CEU - Rosa da China'),(46,'VESPERTINO','14 a 17 anos',15,19,'15h30 às 17h','Quarta/Sexta','Reginaldo','Ginásio','CEU - Rosa da China'),(47,'VESPERTINO','04 e 05 anos',15,4,'13h30 às 14h30','Terça/Quinta','Reginaldo','Rotativo','CEU - Rosa da China'),(48,'VESPERTINO','12 à 17 anos',38,8,'17h às 18h30','Terça/Quinta, Quarta/Sexta','Reginaldo','Sala Zen','CEU - Rosa da China'),(49,'VESPERTINO','11 à 13 anos',38,9,'15h às 16h','Terça/Quinta','Reginaldo','Sala Zen','CEU - Rosa da China'),(50,'VESPERTINO','13 à 17 anos',38,8,'17h às 18h30','Quarta/Sexta','Reginaldo','Sala Zen','CEU - Rosa da China'),(51,'NOTURNO','5 à 10 anos',19,16,'19h às 20h','Quarta/Sexta','Gleice','Sala G.A/Tatame','CEU - Rosa da China'),(52,'NOTURNO','De 7 a 15 anos',18,17,'21h às 22h','Quarta/Sexta','Gleice','Sala G.A/Tatame','CEU - Rosa da China'),(53,'NOTURNO','De 7 a 15 anos',19,17,'20h às 21h','Quarta/Sexta','Gleice','Sala G.A','CEU - Rosa da China'),(54,'NOTURNO','10 à 12 anos',37,9,'19h às 20h','Terça/Quinta','Reginaldo','Sala Zen','CEU - Rosa da China'),(55,'NOTURNO','Adulto',37,9,'19h às 20h','Quarta/Sexta','Reginaldo','Sala Zen','CEU - Rosa da China'),(56,'NOTURNO','Adulto',37,8,'20h às 21h','Quarta/Sexta','Reginaldo','Sala Zen','CEU - Rosa da China'),(57,'NOTURNO','Adulto',37,19,'21h às 22h','Quarta/Sexta','Reginaldo','Sala Zen','CEU - Rosa da China'),(58,'NOTURNO','Adulto',1,NULL,'18h às 19h','Quarta/Sexta','Gleice','Sala de Dança/Tatame','CEU - Rosa da China'),(59,'NOTURNO','Adulto',8,8,'20h às 21h','Terça/Quinta','Reginaldo','Sala de Dança','CEU - Rosa da China'),(60,'NOTURNO','De 05 a 10 anos',19,16,'19h às 20h','Quarta/Sexta','Gleice','Sala G.A','CEU - Rosa da China'),(61,'MATUTINO','06 a 10 anos',18,3,'08h30 às 10h','Sábado','Gleice','Sala de Dança/G','CEU - Rosa da China'),(62,'MATUTINO','07 a 15 Anos',37,15,'10h às 11h30','Domingo','Reginaldo','Sala Zen','CEU - Rosa da China'),(63,'VESPERTINO','15 a 17 Anos',37,15,'12h às 13h30','Domingo','Reginaldo','Sala Zen','CEU - Rosa da China'),(64,'VESPERTINO','Adulto',37,2,'14h às 15h','Domingo','Reginaldo','Sala Zen','CEU - Rosa da China'),(65,'VESPERTINO','12 a 14 Anos',3,12,'12h às 13h','Sábado','Gleice','Ginásio','CEU - Rosa da China'),(66,'MATUTINO','Acima de 14 Anos',3,5,'10h às 11h30','Sábado','Gleice','Ginásio','CEU - Rosa da China'),(67,'VESPERTINO','16 a 18 Anos',3,3,'13h às 14h','Sábado','Gleice','Ginásio','CEU - Rosa da China'),(68,'VESPERTINO','Adulto',43,8,'14h às 15h','Sábado','Gleice','Ginásio','CEU - Rosa da China'),(69,'VESPERTINO','Adulto',43,19,'15h às 16h30','Sábado','Gleice','Ginásio','CEU - Rosa da China'),(70,'MATUTINO','10 a 18 anos',31,NULL,'10h00','Segunda',NULL,NULL,'CEU - Rosa da China'),(71,'VESPERTINO','10 a 18 anos',31,NULL,'13h30','Segunda',NULL,NULL,'CEU - Rosa da China'),(72,'MATUTINO','10 a 18 anos',9,NULL,'11h00','Segunda',NULL,NULL,'CEU - Rosa da China'),(73,'VESPERTINO','10 a 18 anos',9,NULL,'13h30','Segunda',NULL,NULL,'CEU - Rosa da China'),(74,'MATUTINO','10 a 18 anos',35,NULL,'11h00','Segunda',NULL,NULL,'CEU - Rosa da China'),(75,'VESPERTINO','10 a 18 anos',35,NULL,'13h30','Segunda',NULL,NULL,'CEU - Rosa da China'),(76,'MATUTINO','10 a 18 anos',17,NULL,'11h00','Segunda',NULL,NULL,'CEU - Rosa da China'),(77,'VESPERTINO','10 a 18 anos',17,NULL,'13h30','Segunda',NULL,NULL,'CEU - Rosa da China'),(78,'MATUTINO','10 a 18 anos',39,NULL,'11h00','Segunda',NULL,NULL,'CEU - Rosa da China'),(79,'VESPERTINO','10 a 18 anos',39,NULL,'13h30','Segunda',NULL,NULL,'CEU - Rosa da China'),(80,'VESPERTINO','Livre',1,8,'13h30 às 14h30','Terça/Quinta','Erika','Sala de Dança','CEU - Rosa da China');
/*!40000 ALTER TABLE `atividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modalidades`
--

DROP TABLE IF EXISTS `modalidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modalidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modalidades`
--

LOCK TABLES `modalidades` WRITE;
/*!40000 ALTER TABLE `modalidades` DISABLE KEYS */;
INSERT INTO `modalidades` VALUES (2,'Aerolocal'),(1,'Alongamento'),(4,'Baixo Elétrico'),(3,'Basquetebol'),(5,'Brincando com Esporte'),(7,'Canto'),(6,'Capoeira'),(8,'CFC - Intense Training'),(14,'Circuito de ginástica'),(9,'Clarinete'),(10,'Clube da caminhada'),(11,'Clube da corrida'),(13,'Condicionamento Físico'),(12,'Coral e Teoria'),(17,'Flauta Transversal'),(16,'Funcional para corrida'),(15,'Futsal Masculino'),(18,'Ginástica Acrobática'),(19,'Ginástica Artística'),(20,'Ginástica Cerebral'),(21,'Ginástica Localizada'),(22,'Ginástica Senior 60+'),(23,'Guitarra'),(24,'Hidroginástica/Condicionamento Físico'),(25,'Jump'),(26,'Karatê'),(27,'Mat - Pilates'),(28,'Muaythai'),(29,'Musculação'),(30,'Natação/Condicionamento Físico'),(31,'Percussão'),(32,'Pilates'),(33,'Postura e Mobilidade'),(34,'Psicomotricidade para Pessoa com Deficiência/Intelectual'),(35,'Saxofone'),(36,'Step'),(37,'Taekwondo'),(38,'Taekwondo Juvenil'),(39,'Trompete'),(40,'Violão'),(41,'Violino/Viola'),(42,'Violoncelo'),(44,'Volei Adaptado'),(43,'Voleibol');
/*!40000 ALTER TABLE `modalidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `niveis`
--

DROP TABLE IF EXISTS `niveis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `niveis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `niveis`
--

LOCK TABLES `niveis` WRITE;
/*!40000 ALTER TABLE `niveis` DISABLE KEYS */;
INSERT INTO `niveis` VALUES (1,'Acima de 60 anos'),(2,'Adulto'),(3,'Avançado'),(4,'EXCLUSIVO EMEI'),(5,'Feminino'),(6,'Fortalecimento'),(7,'Infantil'),(8,'Iniciante'),(9,'Iniciante (infantil)'),(10,'Iniciante e avançado'),(11,'Iniciante e intermediário'),(12,'Iniciante misto (juvenil)'),(13,'Intermediário'),(14,'Intermediário masculino'),(15,'Juvenil'),(16,'Nível I e II'),(17,'Nível II e III'),(18,'Tático'),(19,'Treinamento');
/*!40000 ALTER TABLE `niveis` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-16 17:24:10
