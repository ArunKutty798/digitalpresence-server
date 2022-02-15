import express from "express";
import { createShop, getShop, shopDetails } from "../controllers/shop.js";
const router = express.Router();

router.post("/create", createShop);

router.get("/shops", getShop);
router.get("/:shopname", shopDetails);
export default router;
