const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();
const conn = require('./database/conexao');
const verificacaoTabelas = require('./verificacaoTables');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'ejs');

conn.authenticate().then(async () => {
  console.log('Banco conectado!');
  await verificacaoTabelas();
}).catch((erro) => {
  console.log(erro);
});

app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});