const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Importar rutas
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

// Usar rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
