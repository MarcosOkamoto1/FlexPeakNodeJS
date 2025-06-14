const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Aplicação em construção");
});

router.get("/flex", (req, res) => {
  res.sendFile(path.resolve('./people.json'));
});

router.use((req, res, next) => {
  res.status(404).send("404 Não Encontrado");
});

module.exports = router;
