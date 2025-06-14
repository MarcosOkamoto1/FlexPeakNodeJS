const express = require("express");
require('dotenv').config()

const app = express();
const routes = require('./routes/routes')

app.use('/', routes)

app.listen(process.env.PORT, () => {
  console.log(`App está rodando na porta: ${process.env.PORT}`);
});
