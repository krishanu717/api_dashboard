import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PulseWatch API Healthy",
  });
});

app.use("/api/v1", routes);

export default app;