use `lookingood`;

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

LOCK TABLES `products_data` WRITE;
/*!40000 ALTER TABLE `products_data` DISABLE KEYS */;
insert into `products_data` (`category_id`, `colors_id`, `description`, `id`, `image`, `name`, `price`, `stock`) values (2, 4, 'La mejor potección para tus días de aventura', 3, NULL, 'Anteojo LG 1', '1250', 102);
insert into `products_data` (`category_id`, `colors_id`, `description`, `id`, `image`, `name`, `price`, `stock`) values (1, 3, 'img', 67, NULL, 'producto prueba img', '150', 20);
insert into `products_data` (`category_id`, `colors_id`, `description`, `id`, `image`, `name`, `price`, `stock`) values (1, 2, 'pr 7', 66, NULL, 'producto 7', '1500', 10);
insert into `products_data` (`category_id`, `colors_id`, `description`, `id`, `image`, `name`, `price`, `stock`) values (2, 4, 'detail 1444', 5, NULL, 'Anteojo de Sol 500', '10', 20);
/*!40000 ALTER TABLE `products_data` ENABLE KEYS */;
UNLOCK TABLES;

