import expres from "express";
import { createProduct, getAllproducts } from "../controllers/productController";

const router = expres.Router();


router.get("/", getAllProducts);
router.post("/", createProduct);

export default router;