const express = require("express");
require('dotenv').config()
const path = require("path");

const app = express();

//http://localhost:3000/
app.get("/ilhadossonhos", (req, res) => {
  res.sendFile(path.resolve("ilhadossonhos.html"));
});

app.get("/flex", (req, res) => {
  res.status(200).send("Bem-vindo a FlexPeak!");
});

app.listen(process.env.PORT, () => {
  console.log(`App está rodando na porta: ${process.env.PORT}`);
});
