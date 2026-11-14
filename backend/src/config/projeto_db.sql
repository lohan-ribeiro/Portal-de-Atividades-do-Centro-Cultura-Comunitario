-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: centro_cultural_db
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
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividades`
--

LOCK TABLES `atividades` WRITE;
/*!40000 ALTER TABLE `atividades` DISABLE KEYS */;
INSERT INTO `atividades` VALUES (1,'MATUTINO','Adulto',14,8,'7h às 8h','Seg/Quarta/Sexta','Fulano','Sala de Dança','Centro Cultural Comunitário'),(2,'MATUTINO','Adulto',14,8,'8h às 9h','Terça/Quinta','Fulano','Sala de Dança','Centro Cultural Comunitário'),(3,'MATUTINO','A partir de 15 anos',29,6,'7h às 8h','Seg/Quarta/Sexta','Beltrano','Musculação','Centro Cultural Comunitário'),(4,'MATUTINO','A partir de 15 anos',29,6,'7h às 8h','Terça/Quinta','Beltrano','Musculação','Centro Cultural Comunitário'),(5,'MATUTINO','A partir de 15 anos',29,8,'9h às 10h','Seg/Qua/Sex','Beltrano','Musculação','Centro Cultural Comunitário'),(6,'MATUTINO','A partir de 15 anos',29,6,'10h às 11h','Qua/Sex','Beltrano','Musculação','Centro Cultural Comunitário'),(7,'MATUTINO','A partir de 15 anos',29,6,'8h às 9h','Seg/Quarta/Sexta','Beltrano','Musculação','Centro Cultural Comunitário'),(8,'MATUTINO','Adulto',32,8,'8h às 9h','Segunda/Quarta/Sexta','Fulana','Tatame','Centro Cultural Comunitário'),(9,'MATUTINO','Acima de 14 anos',10,8,'8h às 9h','Quarta/Sexta','Ciclana','Pátio do Teatro/Externo','Centro Cultural Comunitário'),(10,'MATUTINO','Acima de 14 anos',11,8,'9h às 10h','Terça/Quinta/Sábado','Ciclana','Pátio do Teatro/Externo','Centro Cultural Comunitário'),(11,'MATUTINO','Adulto',16,10,'8h às 9h','Terça/Quinta/Sábado','Ciclana','Externo','Centro Cultural Comunitário'),(12,'MATUTINO','Livre',1,8,'7h às 8h','Terça/Quinta','Fulano','Sala de Dança','Centro Cultural Comunitário'),(13,'MATUTINO','Livre',1,8,'8h às 9h','Segunda/Quarta/Sexta','Fulano','Sala de Dança','Centro Cultural Comunitário'),(14,'MATUTINO','Livre',1,8,'9h às 10h','Terça/Quinta','Fulana','Tatame','Centro Cultural Comunitário'),(15,'MATUTINO','Livre',1,8,'9h às 10h','Segunda/Quarta/Sexta','Fulana','Sala de Dança','Centro Cultural Comunitário'),(16,'MATUTINO','Livre',20,8,'10h às 11h','Terça','Fulana','Sala de Jogos','Centro Cultural Comunitário'),(17,'MATUTINO','Acima de 60 anos',22,8,'10h às 11h','Segunda/Quarta','Fulana','Sala de Dança','Centro Cultural Comunitário'),(18,'MATUTINO','Adulto',36,8,'11h às 12h','Terça/Quinta','Fulana','Sala de Dança','Centro Cultural Comunitário'),(19,'MATUTINO','Adulto',25,8,'11h às 12h','Segunda/Quarta','Fulana','Sala de Dança','Centro Cultural Comunitário'),(20,'MATUTINO','Adulto',2,8,'9h às 10h','Terça/Quinta','Fulana','Sala de Dança','Centro Cultural Comunitário'),(21,'MATUTINO','Adulto',44,8,'9h às 10h30','Terça/Quinta','Fulano','Ginásio','Centro Cultural Comunitário'),(22,'MATUTINO','Adulto',21,8,'9h às 10h','Quarta/Sexta','Ciclana','Sala de Dança','Centro Cultural Comunitário'),(23,'MATUTINO','Adulto',13,NULL,'09h às 10h','Segunda','Fulano','Tatame','Centro Cultural Comunitário'),(24,'MATUTINO','Adulto',24,2,'09h às 10h','Quarta/Sexta','Fulano','Piscina','Centro Cultural Comunitário'),(25,'MATUTINO','Adulto',24,2,'11h às 12h','Quarta/Sexta','Ciclana','Piscina','Centro Cultural Comunitário'),(26,'MATUTINO','Adulto',30,8,'10h às 11h','Segunda/Quarta/Sexta','Fulano','Piscina','Centro Cultural Comunitário'),(27,'MATUTINO','De 6 a 10 anos',30,7,'10h30 às 11h30','Terça/Quinta','Fulano','Piscina','Centro Cultural Comunitário'),(28,'MATUTINO','Adulto',33,8,'10h às 11h','Quarta/Sexta/Sábado','Ciclana','Tatame','Centro Cultural Comunitário'),(29,'MATUTINO','Adulto',33,8,'11h às 12h','Terça/Quinta','Ciclana','Tatame','Centro Cultural Comunitário'),(30,'MATUTINO','Avaliar',34,8,'11h às 12h','Segunda/Quarta/Sexta','Fulano','Sala de Jogos','Centro Cultural Comunitário'),(31,'VESPERTINO','Avaliar o aluno',34,8,'13h30 às 14h30','Segunda','Fulano','Sala de Jogos','Centro Cultural Comunitário'),(32,'VESPERTINO','Avaliar o aluno',34,1,'14h30 às 15h30','Segunda/Quarta','Fulano','Sala de Jogos','Centro Cultural Comunitário'),(33,'VESPERTINO','De 11 a 17 anos',30,NULL,'12h30 às 13h30','Segunda/Quarta/Sexta','Fulano','Piscina','Centro Cultural Comunitário'),(34,'VESPERTINO','Livre',1,8,'13h30 às 14h30','Terça/Quinta','Fulano','Sala de Dança','Centro Cultural Comunitário'),(35,'VESPERTINO','Adulto',14,8,'14h30 às 15h30','Terça/Quinta','Fulano','Sala de Dança','Centro Cultural Comunitário'),(36,'VESPERTINO','Acima de 50 anos',27,8,'16h às 17h','Terça/Quinta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(37,'VESPERTINO','Juvenil',19,17,'15h30 às 16h30','Quarta/Sexta','Beltrana','Sala G.A','Centro Cultural Comunitário'),(38,'VESPERTINO','Adulto',18,17,'16h30 às 17h30','Quarta/Sexta','Beltrana','Sala G.A','Centro Cultural Comunitário'),(39,'VESPERTINO','09 à 12 anos',3,8,'12h às 13h','Terça/Quinta','Beltrana','Ginásio','Centro Cultural Comunitário'),(40,'VESPERTINO','13 à 15 anos',3,11,'13h às 14h30','Terça/Quinta','Beltrana','Ginásio','Centro Cultural Comunitário'),(41,'VESPERTINO','14 a 16 anos',3,14,'14h30 às 16h','Terça/Quinta','Beltrana','Ginásio','Centro Cultural Comunitário'),(42,'VESPERTINO','12 a 15 anos',43,8,'16h30 às 17h30','Terça/Quinta/Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(43,'VESPERTINO','12 a 15 anos',43,8,'17h30 às 18h30','Terça/Quinta/Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(44,'VESPERTINO','Sub 17 Anos',43,NULL,'18h30 às 19h30','Terça/Quinta/Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(45,'VESPERTINO','14 a 17 anos',15,18,'14h30 às 15h30','Quarta/Sexta','Ciclano','Quadra Externa','Centro Cultural Comunitário'),(46,'VESPERTINO','14 a 17 anos',15,19,'15h30 às 17h','Quarta/Sexta','Ciclano','Ginásio','Centro Cultural Comunitário'),(47,'VESPERTINO','04 e 05 anos',15,4,'13h30 às 14h30','Terça/Quinta','Ciclano','Rotativo','Centro Cultural Comunitário'),(48,'VESPERTINO','12 à 17 anos',38,8,'17h às 18h30','Terça/Quinta, Quarta/Sexta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(49,'VESPERTINO','11 à 13 anos',38,9,'15h às 16h','Terça/Quinta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(50,'VESPERTINO','13 à 17 anos',38,8,'17h às 18h30','Quarta/Sexta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(51,'NOTURNO','5 à 10 anos',19,16,'19h às 20h','Quarta/Sexta','Beltrana','Sala G.A/Tatame','Centro Cultural Comunitário'),(52,'NOTURNO','De 7 a 15 anos',18,17,'21h às 22h','Quarta/Sexta','Beltrana','Sala G.A/Tatame','Centro Cultural Comunitário'),(53,'NOTURNO','De 7 a 15 anos',19,17,'20h às 21h','Quarta/Sexta','Beltrana','Sala G.A','Centro Cultural Comunitário'),(54,'NOTURNO','10 à 12 anos',37,9,'19h às 20h','Terça/Quinta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(55,'NOTURNO','Adulto',37,9,'19h às 20h','Quarta/Sexta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(56,'NOTURNO','Adulto',37,8,'20h às 21h','Quarta/Sexta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(57,'NOTURNO','Adulto',37,19,'21h às 22h','Quarta/Sexta','Ciclano','Sala Zen','Centro Cultural Comunitário'),(58,'NOTURNO','Adulto',1,NULL,'18h às 19h','Quarta/Sexta','Beltrana','Sala de Dança/Tatame','Centro Cultural Comunitário'),(59,'NOTURNO','Adulto',8,8,'20h às 21h','Terça/Quinta','Ciclano','Sala de Dança','Centro Cultural Comunitário'),(60,'NOTURNO','De 05 a 10 anos',19,16,'19h às 20h','Quarta/Sexta','Beltrana','Sala G.A','Centro Cultural Comunitário'),(61,'MATUTINO','06 a 10 anos',18,3,'08h30 às 10h','Sábado','Beltrana','Sala de Dança/G','Centro Cultural Comunitário'),(62,'MATUTINO','07 a 15 Anos',37,15,'10h às 11h30','Domingo','Ciclano','Sala Zen','Centro Cultural Comunitário'),(63,'VESPERTINO','15 a 17 Anos',37,15,'12h às 13h30','Domingo','Ciclano','Sala Zen','Centro Cultural Comunitário'),(64,'VESPERTINO','Adulto',37,2,'14h às 15h','Domingo','Ciclano','Sala Zen','Centro Cultural Comunitário'),(65,'VESPERTINO','12 a 14 Anos',3,12,'12h às 13h','Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(66,'MATUTINO','Acima de 14 Anos',3,5,'10h às 11h30','Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(67,'VESPERTINO','16 a 18 Anos',3,3,'13h às 14h','Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(68,'VESPERTINO','Adulto',43,8,'14h às 15h','Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(69,'VESPERTINO','Adulto',43,19,'15h às 16h30','Sábado','Beltrana','Ginásio','Centro Cultural Comunitário'),(70,'MATUTINO','10 a 18 anos',31,NULL,'10h00','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(71,'VESPERTINO','10 a 18 anos',31,NULL,'13h30','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(72,'MATUTINO','10 a 18 anos',9,NULL,'11h00','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(73,'VESPERTINO','10 a 18 anos',9,NULL,'13h30','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(74,'MATUTINO','10 a 18 anos',35,NULL,'11h00','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(75,'VESPERTINO','10 a 18 anos',35,NULL,'13h30','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(76,'MATUTINO','10 a 18 anos',17,NULL,'11h00','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(77,'VESPERTINO','10 a 18 anos',17,NULL,'13h30','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(78,'MATUTINO','10 a 18 anos',39,NULL,'11h00','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(79,'VESPERTINO','10 a 18 anos',39,NULL,'13h30','Segunda',NULL,NULL,'Centro Cultural Comunitário'),(80,'VESPERTINO','Livre',1,8,'13h30 às 14h30','Terça/Quinta','Fulano','Sala de Dança','Centro Cultural Comunitário');
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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
CREATE TABLE `administradores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL UNIQUE,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `administradores`
--
-- Senha padrao (admin123) hasheada com bcrypt: '$2a$10$vG/y8n1lQfBq17o3c62q.Oq0P5rT4qLw1kZex.3/k2W.F/7NuxkXe'
--
LOCK TABLES `administradores` WRITE;
INSERT INTO `administradores` VALUES (1,'admin','$2a$10$vG/y8n1lQfBq17o3c62q.Oq0P5rT4qLw1kZex.3/k2W.F/7NuxkXe');
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-16 17:24:10

