use GestionInventario;

create table categorias (
    categoria_id int auto_increment primary key,
    nombre_categoria VARCHAR(100) not null
);

create table proveedores (
    proveedor_id int auto_increment primary key,
    nombre_proveedor varchar(255) not null,
    direccion varchar(255),
    telefono varchar(15)
);

create table productos (
    id int auto_increment primary key,
    nombre_producto varchar(255) not null,
    precio DECIMAL(10, 2) not null,
    cantidad_stock int not null,
    categoria_id int not null,
    proveedor_id int,
    foreign key (categoria_id) references categorias(categoria_id),
    foreign key (proveedor_id) references proveedores(proveedor_id)
);

create table usuarios (
    usuario_id int AUTO_INCREMENT primary key,
    nombre_usuario varchar(100) not null,
    correo_electronico varchar(255) not null,
    contrasena varchar(255) not null,
    tipo_usuario enum('empleado', 'administrador') not null
);

insert into categorias (nombre_categoria) values
('Granos Basicos y Comestibles'),
('Bebidas'),
('Snacks y Galletas'),
('Aseo y Limpieza'),
('Cuidado Personal'),
('Medicamentos'),
('Lacteos'),
('Energizantes'),
('Chocolates y Confiteria');

insert into proveedores (nombre_proveedor, direccion, telefono) values
('Distribuidora Mayorista', 'San Marcos, Ocotepeque', '98000001'),
('Drogueria internacional', 'Santa Rosa de Copan', '33000002'),
('Granos de Honduras', 'Cucuyagua, Copan', '88900004'),
('Coca-cola Dist. La Herradura', 'San Marcos, Ocotepeque', '95005050'),
('Pepsi Regional Lempira', 'Valladolid, Lempira', '99750000'),
('Yummies Occidente', 'Santa Rosa de Copan', '31510010'),
('Frito-Lay Occidente', 'Santa Rosa de Copan', '99105001'),
('Panificadora Bimbo', 'Santa Rosa de Copan', '96101001'),
('Lacteos Sula Occidente', 'La Entrada, Copan', '33102030');


-- Insertar datos en la tabla de productos
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Maiz', 20.00, 50, 1, 3), -- Granos de Honduras
('Frijol', 25.00, 50, 1, 3), -- Granos de Honduras
('Arroz', 14.00, 50, 1, 3), -- Granos de Honduras
('Huevos', 60.00, 50, 1, 3), -- Granos de Honduras
('Sal', 3.00, 12, 1, 1), -- Distribuidora Mayorista
('Pan Molde Blanco Bimbo', 65.00, 12, 1, 8), -- Panificadora Bimbo
('Pan Molde Integral Bimbo', 68.00, 12, 1, 8), -- Panificadora Bimbo
('Pan Molde Blanco', 57.00, 12, 1, 1), -- Distribuidora Mayorista
('Pan Molde Integral', 60.00, 12, 1, 1), -- Distribuidora Mayorista
('Pasta: Spaguetti', 10.00, 12, 1, 1), -- Distribuidora Mayorista
('Harina', 14.00, 12, 1, 1), -- Distribuidora Mayorista
('Azucar', 25.00, 12, 1, 1), -- Distribuidora Mayorista
('Manteca 1 kg.', 48.00, 12, 1, 1), -- Distribuidora Mayorista
('Avena 400 g.', 25.00, 12, 1, 1); -- Distribuidora Mayorista

-- Insertar datos en la tabla de productos para la categoría de Bebidas
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Pepsi 600 ml.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Banana 600 ml.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Naranja 600 ml.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Uva 600 ml.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('7 up 600 ml.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mountain Dew 600 ml.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mountain Dew Sandía 600 ml.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('Pepsi 1.25 lts.', 35.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Banana 1.25 lts.', 35.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Naranja 1.25 lts.', 35.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Uva 1.25 lts.', 35.00, 12, 2, 5), -- Pepsi Regional Lempira
('Pepsi 2 lts.', 45.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Banana 2 lts.', 45.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Naranja 2 lts.', 45.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Uva 2 lts.', 45.00, 12, 2, 5), -- Pepsi Regional Lempira
('Pepsi 3 lts.', 65.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Banana 3 lts.', 65.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Naranja 3 lts.', 65.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Uva 3 lts.', 65.00, 12, 2, 5), -- Pepsi Regional Lempira
('Aguazul 1.1 lts.', 20.00, 12, 2, 5), -- Pepsi Regional Lempira
('Aguazul 750 ml.', 12.00, 12, 2, 5), -- Pepsi Regional Lempira
('Gatorade 600 ml.', 30.00, 12, 2, 5), -- Pepsi Regional Lempira
('Jugo Enjoy enlatado.', 12.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mountain Dew enlatada.', 17.00, 12, 2, 5), -- Pepsi Regional Lempira
('Pepsi enlatada.', 17.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Banana enlatada.', 17.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Naranja enlatada.', 17.00, 12, 2, 5), -- Pepsi Regional Lempira
('Mirinda Uva enlatada.', 17.00, 12, 2, 5), -- Pepsi Regional Lempira
('7 up enlatada', 17.00, 12, 2, 5), -- Pepsi Regional Lempira
('Coca Cola 600 ml.', 20.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Tropical Banana 600 ml.', 20.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Tropical Naranja 600 ml.', 20.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Tropical Uva 600 ml.', 20.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Sprite 600 ml.', 20.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Coca Cola 1.5 lts.', 40.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Coca Cola 2 lts.', 45.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Coca Cola 3 lts.', 65.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Tropical Banana 3 lts.', 65.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Agua Dasani 600 ml.', 10.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Agua Dasani 1000 ml.', 15.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Jugo Naranja Del Valle 2 lts.', 28.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Jugo Naranja Del Valle 1.1 lts.', 18.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Jugo Naranja Del Valle 500 ml.', 14.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Jugo Mandarina Del Valle 500 ml.', 14.00, 12, 2, 4), -- Coca-cola Dist. La Herradura
('Jugo Frutas Varios Sula 473 ml.', 18.00, 12, 2, 9); -- Lacteos Sula Occidente

-- Insertar datos en la tabla de productos para la categoría de Snacks y Galletas
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Galleta Gansitos', 22.00, 12, 3, 8), -- Panificadora Bimbo
('Galleta Principe', 18.00, 12, 3, 8), -- Panificadora Bimbo
('Galleta Pingüinos', 25.00, 12, 3, 8), -- Panificadora Bimbo
('Galleta Sponch', 16.00, 12, 3, 8), -- Panificadora Bimbo
('Roles de Canela', 25.00, 12, 3, 8), -- Panificadora Bimbo
('Panquesitos', 28.00, 12, 3, 8), -- Panificadora Bimbo
('Takis Fuego', 15.00, 12, 3, 8), -- Panificadora Bimbo
('Ranchitas Queso', 30.00, 12, 3, 6), -- Yummies Occidente
('Ranchitas Picante', 30.00, 12, 3, 6), -- Yummies Occidente
('Ranchitas Naturales', 35.00, 12, 3, 6), -- Yummies Occidente
('Chicharrones Picante', 45.00, 12, 3, 6), -- Yummies Occidente
('Chicharrones Barbacoa', 45.00, 12, 3, 6), -- Yummies Occidente
('Zambos Picante', 40.00, 12, 3, 6), -- Yummies Occidente
('Zambos Natural', 40.00, 12, 3, 6), -- Yummies Occidente
('Zambos Ceviche', 40.00, 12, 3, 6), -- Yummies Occidente
('Zambos Yuquitas Picante', 35.00, 12, 3, 6), -- Yummies Occidente
('Tacos Picante', 30.00, 12, 3, 6), -- Yummies Occidente
('Tacos Barbacoa', 30.00, 12, 3, 6), -- Yummies Occidente
('Tacos Queso', 30.00, 12, 3, 6), -- Yummies Occidente
('Taqueritos Picante', 40.00, 12, 3, 6), -- Yummies Occidente
('Taqueritos Queso', 40.00, 12, 3, 6), -- Yummies Occidente
('Zibas Natural', 40.00, 12, 3, 6), -- Yummies Occidente
('Zibas Crema y Especias', 40.00, 12, 3, 6), -- Yummies Occidente
('Zibas Miel y Mostaza', 40.00, 12, 3, 6), -- Yummies Occidente
('Galleta Arcoiris', 15.00, 12, 3, 7), -- Frito-Lay Occidente
('Galleta Pan Crema', 15.00, 12, 3, 7), -- Frito-Lay Occidente
('Galleta Emperador', 15.00, 12, 3, 7), -- Frito-Lay Occidente
('Galleta Florentina', 15.00, 12, 3, 7), -- Frito-Lay Occidente
('Galleta Chockis', 15.00, 12, 3, 7), -- Frito-Lay Occidente
('Doritos Picante', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Doritos Queso', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Doritos Flamin Hot', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Papas Lays Natural', 35.00, 12, 3, 7), -- Frito-Lay Occidente
('Papas Lays Crema y Especias', 35.00, 12, 3, 7), -- Frito-Lay Occidente
('Papas Lays Queso', 35.00, 12, 3, 7), -- Frito-Lay Occidente
('Cheetos', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Cheetos Crunchy', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Cheetos Flamin Hot', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Fritos Antojitos', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Fritos Twist', 30.00, 12, 3, 7), -- Frito-Lay Occidente
('Caribas Picante', 35.00, 12, 3, 7), -- Frito-Lay Occidente
('Caribas Sofrito', 35.00, 12, 3, 7), -- Frito-Lay Occidente
('Poffets Queso', 35.00, 12, 3, 7); -- Frito-Lay Occidente

-- Insertar datos en la tabla de productos para la categoría de Aseo y Limpieza
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Jabón Multiusos', 20.00, 12, 4, 1), -- Distribuidora Mayorista
('Jabón Para Ropa', 25.00, 12, 4, 1), -- Distribuidora Mayorista
('Suavitel Galon', 180.00, 12, 4, 1), -- Distribuidora Mayorista
('Detergente Liquido 500 ml.', 15.00, 12, 4, 1), -- Distribuidora Mayorista
('Detergente en Polvo Libra', 30.00, 12, 4, 1), -- Distribuidora Mayorista
('Cloro 946 ml.', 35.00, 12, 4, 1); -- Distribuidora Mayorista

-- Insertar datos en la tabla de productos para la categoría de Cuidado Personal
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Jabón de Baño Nivea', 25.00, 12, 5, 1), -- Distribuidora Mayorista
('Jabón de Baño Protex', 20.00, 12, 5, 1), -- Distribuidora Mayorista
('Jabón de Baño Dove', 25.00, 12, 5, 1), -- Distribuidora Mayorista
('Jabón de Manos Gel', 40.00, 12, 5, 1), -- Distribuidora Mayorista
('Pasta Dental Colgate 22 ml.', 15.00, 12, 5, 1), -- Distribuidora Mayorista
('Pasta Dental Colgate 75 ml.', 25.00, 12, 5, 1), -- Distribuidora Mayorista
('Pasta Dental Colgate 125 ml.', 45.00, 12, 5, 1), -- Distribuidora Mayorista
('Pasta Dental Oral B 125 ml.', 50.00, 12, 5, 1), -- Distribuidora Mayorista
('Cepillo Dental Colgate', 15.00, 12, 5, 1), -- Distribuidora Mayorista
('Cepillo Dental Oral B', 18.00, 12, 5, 1), -- Distribuidora Mayorista
('Rasuradora Bic', 20.00, 12, 5, 1), -- Distribuidora Mayorista
('Rasuradora Gillete', 30.00, 12, 5, 1), -- Distribuidora Mayorista
('Desodorante Rexona Barra', 75.00, 48, 5, 2), -- Drogueria Internacional
('Desodorante Rexona Aerosol', 100.00, 48, 5, 2), -- Drogueria Internacional
('Desodorante Gillete Gel', 78.00, 48, 5, 2), -- Drogueria Internacional
('Desodorante Gillete Aerosol', 105.00, 48, 5, 2), -- Drogueria Internacional
('Desodorante Nivea Aerosol', 115.00, 48, 5, 2), -- Drogueria Internacional
('Desodorante Old Spice Aerosol', 95.00, 48, 5, 2), -- Drogueria Internacional
('Desodorante Old Spice Barra', 70.00, 48, 5, 2), -- Drogueria Internacional
('Shampoo Head and Shoulders 473 ml.', 105.00, 12, 5, 1), -- Distribuidora Mayorista
('Shampoo Head and Shoulders 946 ml.', 180.00, 12, 5, 1), -- Distribuidora Mayorista
('Shampoo Pantene 473 ml.', 105.00, 12, 5, 1), -- Distribuidora Mayorista
('Shampoo Pantene 946 ml.', 180.00, 12, 5, 1), -- Distribuidora Mayorista
('Shampoo Sedal 473 ml.', 115.00, 12, 5, 1), -- Distribuidora Mayorista
('Shampoo Sedal 946 ml.', 185.00, 12, 5, 1), -- Distribuidora Mayorista
('Crema para Peinar Head and Shoulders 473 ml.', 80.00, 12, 5, 1), -- Distribuidora Mayorista
('Crema para Peinar Head and Shoulders 946 ml.', 150.00, 12, 5, 1), -- Distribuidora Mayorista
('Crema para Peinar Pantene 473 ml.', 80.00, 12, 5, 1), -- Distribuidora Mayorista
('Crema para Peinar Pantene 946 ml.', 150.00, 12, 5, 1), -- Distribuidora Mayorista
('Crema para Peinar Sedal 473 ml.', 90.00, 12, 5, 1), -- Distribuidora Mayorista
('Crema para Peinar Sedal 946 ml.', 160.00, 12, 5, 1), -- Distribuidora Mayorista
('Bloqueador Solar 50 ml.', 120.00, 48, 5, 2), -- Drogueria Internacional
('Crema Facial Ponds', 135.00, 48, 5, 2), -- Drogueria Internacional
('Crema Facial Nivea', 120.00, 48, 5, 2); -- Drogueria Internacional

-- Insertar datos en la tabla de productos para la categoría de Medicamentos
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Antigripal', 2.00, 48, 6, 2), -- Drogueria Internacional
('Acetaminofen', 2.00, 48, 6, 2), -- Drogueria Internacional
('Amoxicilina', 3.00, 48, 6, 2), -- Drogueria Internacional
('Panadol Ultra', 10.00, 48, 6, 2), -- Drogueria Internacional
('Alka-Seltzer', 6.00, 48, 6, 2), -- Drogueria Internacional
('Salt-Andrews', 6.00, 48, 6, 2), -- Drogueria Internacional
('Tabcin', 6.00, 48, 6, 2); -- Drogueria Internacional

-- Insertar datos en la tabla de productos para la categoría de Lacteos
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Leche Entera 473 ml.', 17.00, 12, 7, 9), -- Lacteos Sula Occidente
('Leche Entera 946 ml.', 33.00, 12, 7, 9), -- Lacteos Sula Occidente
('Mantequilla Sula media libra.', 20.00, 12, 7, 9), -- Lacteos Sula Occidente
('Mantequilla del Rancho libra.', 45.00, 12, 7, 9), -- Lacteos Sula Occidente
('Quesillo Sula media libra.', 30.00, 12, 7, 9), -- Lacteos Sula Occidente
('Queso Fresco libra.', 60.00, 12, 7, 9), -- Lacteos Sula Occidente
('Queso Seco libra.', 78.00, 12, 7, 9); -- Lacteos Sula Occidente

-- Insertar datos en la tabla de productos para la categoría de Energizantes
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Monster Energy 473 ml.', 45.00, 12, 8, 4), -- Coca-cola Dist. La Herradura
('AMP Energy 500 ml.', 20.00, 12, 8, 2), -- Pepsi Regional Lempira
('Fury Energy 500 ml.', 20.00, 12, 8, 4), -- Coca-cola Dist. La Herradura
('Raptor 300 ml.', 14.00, 12, 8, 1), -- Distribuidora Mayorista
('Raptor 500 ml.', 22.00, 12, 8, 1), -- Distribuidora Mayorista
('Sobe Adrenaline Rush 296 ml.', 35.00, 12, 8, 2), -- Pepsi Regional Lempira
('Volt 300 ml.', 12.00, 12, 8, 1); -- Distribuidora Mayorista

-- Insertar datos en la tabla de productos para la categoría de Chcolates y Confiteria
INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES
('Chocolate Snickers', 35.00, 12, 9, 1), -- Distribuidora Mayorista
('Chocolate Hershey''s Barra', 40.00, 12, 9, 1), -- Distribuidora Mayorista
('Chocolate Hershey''s Kisses', 25.00, 12, 9, 1); -- Distribuidora Mayorista


-- Insertar datos en la tabla de usuarios.
INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasena, tipo_usuario) VALUES
('eduardj', 'jeduard7030@gmail.com', 'admin10', 'administrador'),
('juanprz', 'juan@me.com', '1234', 'empleado'),
('mariahdz', 'maria@me.com', '0101', 'empleado');

