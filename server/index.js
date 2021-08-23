const express = require("express");
//change port
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Local Test" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});