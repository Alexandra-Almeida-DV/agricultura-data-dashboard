const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Agricultura funcionando 🌱" });
});

app.get("/api/production", (req, res) => {
  res.json([
    { crop: "Soja", production: 15000 },
    { crop: "Milho", production: 12000 },
    { crop: "Café", production: 8000 }
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});