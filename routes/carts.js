const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const cartsFilePath = path.join(__dirname, '../data/carts.json');

// Función para leer carritos del archivo
const readCarts = () => {
    const data = fs.readFileSync(cartsFilePath, 'utf-8');
    return JSON.parse(data);
};

// Función para escribir carritos en el archivo
const writeCarts = (carts) => {
    fs.writeFileSync(cartsFilePath, JSON.stringify(carts, null, 2));
};

// Crear un nuevo carrito
router.post('/', (req, res) => {
    const carts = readCarts();
    
    const newCart = {
        id: carts.length ? carts[carts.length - 1].id + 1 : 1,
        products: []
    };
    
    carts.push(newCart);
    writeCarts(carts);
    res.status(201).json(newCart);
});

// Listar productos de un carrito
router.get('/:cid', (req, res) => {
    const carts = readCarts();
    const cart = carts.find(c => c.id === parseInt(req.params.cid));
    
    if (cart) {
        return res.json(cart.products);
    }
    
    res.status(404).send('Carrito no encontrado');
});

// Agregar un producto al carrito
router.post('/:cid/product/:pid', (req, res) => {
    const carts = readCarts();
    const cart = carts.find(c => c.id === parseInt(req.params.cid));
    
    if (!cart) {
        return res.status(404).send('Carrito no encontrado');
    }
    
    const productId = parseInt(req.params.pid);
    const existingProductIndex = cart.products.findIndex(p => p.product === productId);
    
    if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += 1;
    } else {
        cart.products.push({ product: productId, quantity: 1 });
    }
    
    writeCarts(carts);
    res.status(200).json(cart.products);
});

module.exports = router;
