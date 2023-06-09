import { Router } from "express";
import ProductsManager from "../manager/productsManager.js";
import ProductsManagerMongo from "../productsManagerMongo.js";

const router = Router();
const productsManager = new ProductsManager();
const productsManagerMongo = new ProductsManagerMongo();

// Obtenemos todos los productos
router.get("/", async (req, res) => {
  let allProducts = await productsManagerMongo.getProducts();
  res.render("realTimeProducts", { products: allProducts });
});

// Agregar un nuevo producto
router.post("/", async (req, res) => {
  const { title, description, price, thumbnail, code, stock, category } =
    req.body;

  if (!title || !description || !price || !code || !stock || !category) {
    res.send("Faltan datos por cargar");
    return;
  }
  const newProduct = {
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
    status: true,
    category,
  };

  const msg = await productsManagerMongo.addProduct(newProduct);
  res.send("Producto agregado");
});


// Eliminar un producto
router.delete("/", async (req, res) => {
  const id = req.body.id;
  const msg = await productsManagerMongo.deleteProduct(id);
  res.render("realTimeProducts");
});

export default router;
