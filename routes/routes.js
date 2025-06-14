const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Aplicação em construção");
});

app.use((req, res, next) => {
  res.status(404).send("404 Não Encontrado");
});

module.exports = router