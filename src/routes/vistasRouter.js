// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/products.json');

// // Función para leer productos del archivo
// const readProducts = () => {
//     const data = fs.readFileSync(productsFilePath, 'utf-8');
//     return JSON.parse(data);
// };

// // Ruta para "home" - muestra todos los productos de forma estática
// router.get('/', (req, res) => {
//     const productos = readProducts(); 
//     res.render('home', { productos });
// });

// // Ruta para "realTimeProducts" - con actualización en tiempo real
// router.get('/realtimeproducts', (req, res) => {
//     const productos = readProducts(); // Asegúrate de que aquí la función se llame correctamente
//     console.log("Productos:", productos); // Para ver qué productos se están leyendo
//     res.render('realTimeProducts', { productos });
// });

// module.exports = router;



import { Router } from 'express';
import {ProductsManager} from "../dao/ProductsManager.js"

ProductsManager.path="./src/data/productos.json"
export const router=Router()

router.get('/',(req,res)=>{

    res.render("home")
})

router.get('/products', async (req, res) => {
    try {
        const products = await ProductsManager.getProducts()
        res.render('index', { products })
    } catch (error) {
        console.error('Error al cargar los productos:', error)
        res.status(500).send('Error al cargar los productos')
    }
});

router.get('/realtimeproducts', (req, res) => {
    
    res.render('realTimeProducts');
});