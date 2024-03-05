import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: "https://madeforme.netlify.app",
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

/// User Router
import userRouter from "./router/user.router.js";
import productRouter from "./router/product.router.js";
import paymentRouter from "./router/product.router.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/payment", paymentRouter);

export default app;
