import { Router } from "express";
import ProductsManagerMongo from "../productsManagerMongo.js";

const router = Router();
const productsManagerMongo = new ProductsManagerMongo();

// Obtenemos todos los productos
router.get("/", async (req, res) => {
  let allProducts = await productsManagerMongo.getProducts();
  res.render("home", { products: allProducts });
});

export default router;