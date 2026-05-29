require("dotenv").config();

const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const rateLimit = require("express-rate-limit");

const swaggerSpec = require("./docs/swagger");

const githubRoutes = require("./routes/githubRoutes");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "GitHub Profile Analyzer API Running",
  });
});

app.use("/api/github", githubRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});