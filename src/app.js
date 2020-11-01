import express from 'express';
import indexRutas from '../routes/indexRutas'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

require("dotenv").config(); // Variables de entorno

const app = express();
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Conexión a Base de datos
const uri = `mongodb://127.0.0.1:27017/${process.env.DBNAME}`;
const opciones = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, opciones)
  .then(() => console.log(`Conectado a mongodb: database => ${process.env.DBNAME}`))
  .catch((error) => console.log("Error de conexión", error));



//Rutas
app.use('/', indexRutas())



app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});