import {Router} from "express";
import { createProduct, 
         deleteProduct, 
         getAllProducts, 
         getProduct,
         updateProduct } from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/",getAllProducts); //api/products => [...]
appRouter.get("/:id", getProduct); //api/products/dynamic_id(1,2,3,4...)
appRouter.post("/create", createProduct);
appRouter.put("/update/:id", updateProduct); 
appRouter.delete("/delete/:id", deleteProduct);


export default appRouter;