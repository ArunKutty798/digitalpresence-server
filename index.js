import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import ShopRouter from "./routes/shop.js";
import "./db/index.js";
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use("/shop", ShopRouter);
const PORT = 5000;

app.get("/", (req, res) => {
  res.json("Home");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
