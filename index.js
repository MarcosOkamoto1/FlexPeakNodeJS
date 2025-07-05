const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
const routes = require("./routes/routes");

app.use(express.json());
app.use("/", routes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
  res.status(404).send(`404 Não Encontrado`);
});

app.listen(process.env.PORT, () => {
  console.log(`App rodando na porta: ${process.env.PORT}`);
});
