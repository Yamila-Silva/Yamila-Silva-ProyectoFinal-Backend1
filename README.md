### ¿Qué contiene este archivo?

1. **Descripción del proyecto**: Explica de qué se trata el proyecto y su propósito.
2. **Requisitos**: Herramientas necesarias para ejecutar el proyecto (Node.js y NPM).
3. **Instalación**: Instrucciones para clonar el repositorio, navegar a la carpeta y instalar las dependencias.
4. **Uso**: Muestra cómo iniciar el servidor y detalla los endpoints disponibles para la API.
5. **Pruebas**: Ejemplo básico de cómo probar los endpoints con **Postman** u otra herramienta similar.
6. **Autor**: Tu firma como desarrolladora.

# Proyecto E-commerce Backend
Este proyecto para el curso de Backend de **CODERHOUSE** se trata de un servidor backend basado en **Node.js** y **Express** que permite gestionar productos y carritos de compras para un e-commerce. Los datos se almacenan en archivos JSON para simular una base de datos.

## Descripción

La aplicación permite a los usuarios ver una lista de productos, agregar nuevos productos y eliminarlos. Las actualizaciones en la lista de productos se reflejan en tiempo real gracias a la integración de WebSockets.

## Requisitos
- **Node.js**
- **NPM** (Node Package Manager)

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/Yamila-Silva/Yamila-Silva-ProyectoFinal-Backend1.git
2. Entra en la carpeta del proyecto:
cd Backend1+SilvaYasin\e-commerce-backend
3. Instala las dependencias necesarias:
npm install

## Uso
1. Para iniciar el servidor, ejecuta:
npm start
El servidor escuchará en el puerto 8080.
2. Los endpoints disponibles son:

Endpoints de Productos
- Listar productos: GET /api/products
- - Parámetro opcional ?limit para limitar el número de productos devueltos.
- Obtener producto por ID: GET /api/products/:pid
- Agregar un producto: POST /api/products
- - Campos requeridos: title, description, code, price, stock, category, thumbnails (opcional).
- Actualizar producto por ID: PUT /api/products/:pid
- Eliminar producto por ID: DELETE /api/products/:pid

Endpoints de Carrito
- Crear un carrito: POST /api/carts
-  Listar productos de un carrito por ID: GET /api/carts/:cid
- Agregar un producto al carrito: POST /api/carts/:cid/product/:pid
- - Se agrega un producto al carrito con una cantidad de 1.

## Pruebas
Puedes usar Postman u otra herramienta de cliente HTTP para realizar solicitudes a los endpoints mencionados.
- Ejemplo de prueba para obtener todos los productos:
GET http://localhost:8080/api/products

## Autor: 
Yamila A. Silva Yasin.