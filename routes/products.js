const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const productsFilePath = path.join(__dirname, '../data/products.json');

// Función para leer productos del archivo
const readProducts = () => {
    const data = fs.readFileSync(productsFilePath, 'utf-8');
    return JSON.parse(data);
};

// Función para escribir productos en el archivo
const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

// Obtener todos los productos
router.get('/', (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    const products = readProducts();
    if (limit) {
        return res.json(products.slice(0, limit));
    }
    res.json(products);
});

// Obtener un producto por id
router.get('/:pid', (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.pid));
    if (product) {
        return res.json(product);
    }
    res.status(404).send('Producto no encontrado');
});

// Agregar un nuevo producto
router.post('/', (req, res) => {
    const { title, description, code, price, stock, category, thumbnails } = req.body;
    const products = readProducts();
    
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category,
        thumbnails: thumbnails || []
    };
    
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
});

// Actualizar un producto
router.put('/:pid', (req, res) => {
    const products = readProducts();
    const index = products.findIndex(p => p.id === parseInt(req.params.pid));
    
    if (index !== -1) {
        const updatedProduct = { ...products[index], ...req.body };
        products[index] = updatedProduct;
        writeProducts(products);
        return res.json(updatedProduct);
    }
    
    res.status(404).send('Producto no encontrado');
});

// Eliminar un producto
router.delete('/:pid', (req, res) => {
    let products = readProducts();
    const index = products.findIndex(p => p.id === parseInt(req.params.pid));
    
    if (index !== -1) {
        products.splice(index, 1);
        writeProducts(products);
        return res.status(204).send();
    }
    
    res.status(404).send('Producto no encontrado');
});

module.exports = router;
