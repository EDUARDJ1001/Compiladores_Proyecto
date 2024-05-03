const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root0101',
    database: 'gestioninventario'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión a la base de datos establecida');
});

// Crear aplicación Express
const app = express();


// Middleware para parsear JSON en las solicitudes
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permitir los métodos HTTP especificados
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permitir ciertos encabezados HTTP
    next();
});
app.use(bodyParser.json());

// PRODUCTOS

// GET DE TODO
app.get('/productos', (req, res) => {
    console.log(`data extraida con exito`);
    const sql = 'SELECT * FROM productos';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// GET POR ID
app.get('/productos/:id', (req, res) => {
    const productId = req.params.id;
    const sql = `SELECT * FROM productos WHERE id = ${productId}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// Ruta para agregar un nuevo producto
app.post('/productos', (req, res) => {
    const { nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id } = req.body;
    const sql = `INSERT INTO productos (nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al agregar el producto' });
        } else {
            res.status(200).json({ message: 'Producto agregado con éxito' });
        }
    });
});

//Ruta para editar un producto por Id
app.put('/productos/:id', (req, res) => {
    const productId = req.params.id;
    const { nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id } = req.body;
    const sql = `UPDATE productos SET nombre_producto = ?, precio = ?, cantidad_stock = ?, categoria_id = ?, proveedor_id = ? WHERE id = ?`;
    db.query(sql, [nombre_producto, precio, cantidad_stock, categoria_id, proveedor_id, productId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al editar el producto' });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Producto editado con éxito' });
            } else {
                res.status(404).json({ error: 'Producto no encontrado' });
            }
        }
    });
});

// Ruta para eliminar un producto por su ID
app.delete('/productos/:id', (req, res) => {
    const productId = req.params.id;
    const sql = `DELETE FROM productos WHERE id = ?`;
    db.query(sql, [productId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        } else {
            res.status(200).json({ message: 'Producto eliminado con éxito' });
        }
    });
});


// CATEGORIAS GET GENERAL
app.get('/categorias', (req, res) => {
    console.log(`data extraida con exito`);
    const sql = 'SELECT * FROM categorias';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// GET POR ID
app.get('/categorias/:id', (req, res) => {
    const categriaId = req.params.id;
    const sql = `SELECT * FROM categorias WHERE categoria_id = ${categriaId}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// METODO POST PARA AGREGAR EN CATEGORIAS
app.post('/categorias', (req, res) => {
    const { nombre_categoria } = req.body;
    const sql = 'INSERT INTO categorias (nombre_categoria) VALUES (?, ?)';
    db.query(sql, [nombre_categoria], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                res.status(409).send('La categoría ya existe');
            } else {
                res.status(500).send('Error al agregar la categoría');
            }
        } else {
            res.status(200).send('Categoría agregada con éxito');
        }
    });
});

// METODO PUT PARA EDITAR CAETGORIAS
app.put('/categorias/:id', (req, res) => {
    const { nombre_categoria } = req.body;
    const categoriaId = req.params.id;
    const sql = 'UPDATE categorias SET nombre_categoria = ? WHERE categoria_id = ?';
    db.query(sql, [nombre_categoria, categoriaId], (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar la categoría');
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send('Categoría no encontrada');
            } else {
                res.status(200).send('Categoría actualizada con éxito');
            }
        }
    });
});

// METODO DELETE PARA ELIMINAR CATEGORIA
app.delete('/categorias/:id', (req, res) => {
    const categoriaId = req.params.id;
    const sql = 'DELETE FROM categorias WHERE categoria_id = ?';
    db.query(sql, [categoriaId], (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la categoría');
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send('Categoría no encontrada');
            } else {
                res.status(200).send('Categoría eliminada con éxito');
            }
        }
    });
});


// PROVEEDORES
app.get('/proveedores', (req, res) => {
    console.log(`data extraida con exito`);
    const sql = 'SELECT * FROM proveedores';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// GET POR ID
app.get('/proveedores/:id', (req, res) => {
    const proveedorId = req.params.id;
    const sql = `SELECT * FROM proveedores WHERE proveedor_id = ${proveedorId}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

//AGREGAR PROVEEDOR
// Ruta para agregar un nuevo proveedor
app.post('/proveedores', (req, res) => {
    const { nombre_proveedor, direccion, telefono } = req.body;
    const sql = `INSERT INTO proveedores (nombre_proveedor, direccion, telefono) VALUES (?, ?, ?)`;
    db.query(sql, [nombre_proveedor, direccion, telefono], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al agregar el proveedor' });
        } else {
            res.status(200).json({ message: 'Proveedor agregado con éxito' });
        }
    });
});

// Ruta para editar un proveedor por Id
app.put('/proveedores/:id', (req, res) => {
    const proveedorId = req.params.id;
    const { nombre_proveedor, direccion, telefono } = req.body;
    const sql = `UPDATE proveedores SET nombre_proveedor = ?, direccion = ?, telefono = ? WHERE proveedor_id = ?`;
    db.query(sql, [nombre_proveedor, direccion, telefono, proveedorId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al editar el proveedor' });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Proveedor editado con éxito' });
            } else {
                res.status(404).json({ error: 'Proveedor no encontrado' });
            }
        }
    });
});

// Ruta para eliminar un proveedor por Id
app.delete('/proveedores/:id', (req, res) => {
    const proveedorId = req.params.id;
    const sql = `DELETE FROM proveedores WHERE proveedor_id = ?`;
    db.query(sql, [proveedorId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al eliminar el proveedor' });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Proveedor eliminado con éxito' });
            } else {
                res.status(404).json({ error: 'Proveedor no encontrado' });
            }
        }
    });
});


// USUARIOS
app.get('/usuarios', (req, res) => {
    console.log(`data extraida con exito`);
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// Ruta para manejar la solicitud de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM usuarios WHERE nombre_usuario = ? AND contrasena = ?`; // Cambiar los nombres de columnas
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error de servidor' });
        } else {
            if (result.length > 0) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        }
    });
});

// Ruta para la recuperación de contraseña
app.post('/password-recovery', async (req, res) => {
    const { email } = req.body;

    // Validar el correo electrónico (agregar tus propias validaciones según sea necesario)
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Dirección de correo electrónico no válida' });
    }

    try {
        // Configurar el transportador de correo electrónico utilizando Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // O el servicio de correo electrónico que estés utilizando
            auth: {
                user: 'tucorreo@gmail.com', // Tu dirección de correo electrónico
                pass: 'tucontraseña', // Tu contraseña de correo electrónico
            },
        });

        // Opciones del correo electrónico
        const mailOptions = {
            from: 'tuapp@gmail.com', // Dirección de correo electrónico de la aplicación
            to: email, // Correo electrónico del usuario que solicitó la recuperación de contraseña
            subject: 'Recuperación de contraseña', // Asunto del correo electrónico
            text: 'Aquí está el enlace para restablecer tu contraseña:', // Cuerpo del correo electrónico
            // Puedes incluir aquí el enlace para restablecer la contraseña
        };

        // Enviar el correo electrónico
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
                return res.status(500).json({ error: 'Error al enviar el correo electrónico de recuperación de contraseña' });
            } else {
                console.log('Correo electrónico de recuperación de contraseña enviado:', info.response);
                return res.status(200).json({ message: 'Correo electrónico de recuperación de contraseña enviado exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        return res.status(500).json({ error: 'Error en el servidor al procesar la solicitud de recuperación de contraseña' });
    }
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
