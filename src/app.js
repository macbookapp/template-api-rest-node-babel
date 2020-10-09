import express from 'express';
import indexRutas from '../Rutas/indexRutas'
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Rutas
app.use('/', indexRutas())



app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});