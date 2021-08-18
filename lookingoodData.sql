
LOCK TABLES `categories_data` WRITE;
/*!40000 ALTER TABLE `categories_data` DISABLE KEYS */;
INSERT INTO `categories_data` VALUES (1,'Aventura'),(2,'Casual');
/*!40000 ALTER TABLE `categories_data` ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `colors_data` WRITE;
/*!40000 ALTER TABLE `colors_data` DISABLE KEYS */;
INSERT INTO `colors_data` VALUES (1,'Azul Electrico'),(2,'Amarillo Vibrante'),(3,'Verde viviente'),(4,'Rojo Naciente');
/*!40000 ALTER TABLE `colors_data` ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `users_data` WRITE;
/*!40000 ALTER TABLE `users_data` DISABLE KEYS */;
insert into `users_data` (`admin`, `avatar`, `ciudad`, `dni`, `domicilio`, `email`, `fullName`, `id`, `password`, `provincia`, `userName`) values (1, 'default.jpg', '#', 32800246, 'lasheras1180', 'admin@lookingood.com.ar', 'admin', 1, '$2a$10$wK/1nDKrjwoD2r0VppmkM.JjxAaVGfN3jpGZzEzevgV2Y42SHICVK', 'La Rioja', 'admin');
insert into `users_data` (`admin`, `avatar`, `ciudad`, `dni`, `domicilio`, `email`, `fullName`, `id`, `password`, `provincia`, `userName`) values (0, 'default.jpg', '#', 32800000, 'gue123', 'guest@gmail.com', 'guest', 2, '$2a$10$O8O1A0uitkQHLyDXAYRh/.zHpU5A0p5soY8XVnsjK5rHii.p8QbAC', 'Formosa', 'guest');
/*!40000 ALTER TABLE `users_data` ENABLE KEYS */;
UNLOCK TABLES;



insert into `categories_data` (`id`, `name`) values (1, 'Aventura');
insert into `categories_data` (`id`, `name`) values (2, 'Casual');
insert into `colors_data` (`id`, `name`) values (1, 'Azul Electrico');
insert into `colors_data` (`id`, `name`) values (2, 'Amarillo Vibrante');
insert into `colors_data` (`id`, `name`) values (3, 'Verde viviente');
insert into `colors_data` (`id`, `name`) values (4, 'Rojo Naciente');
insert into `users_data` (`admin`, `avatar`, `ciudad`, `dni`, `domicilio`, `email`, `fullName`, `id`, `password`, `provincia`, `userName`) values (1, 'default.jpg', '#', 32800246, 'lasheras1180', 'admin@lookingood.com.ar', 'admin', 1, '$2a$10$wK/1nDKrjwoD2r0VppmkM.JjxAaVGfN3jpGZzEzevgV2Y42SHICVK', 'La Rioja', 'admin');
insert into `users_data` (`admin`, `avatar`, `ciudad`, `dni`, `domicilio`, `email`, `fullName`, `id`, `password`, `provincia`, `userName`) values (0, 'default.jpg', '#', 32800000, 'gue123', 'guest@gmail.com', 'guest', 2, '$2a$10$O8O1A0uitkQHLyDXAYRh/.zHpU5A0p5soY8XVnsjK5rHii.p8QbAC', 'Formosa', 'guest');
;

