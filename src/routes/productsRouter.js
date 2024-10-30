import { Router } from 'express';
import { ProductsManager } from '../dao/ProductsManager.js';

export const router=Router()

ProductsManager.setPath("./src/data/productos.json")


router.get('/', async (req, res) => {
    try {
        const products = await ProductsManager.getProducts();
        res.status(200).json(products); // Envía los productos en formato JSON con estado 200
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        res.status(500).json({ error: 'Error al cargar los productos' });
    }
});