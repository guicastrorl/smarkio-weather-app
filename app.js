const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const historics = require('./models/Post');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//DB
const sequelize = new Sequelize('historico', 'root', 'g11c17r94', {
  host: 'localhost',
  dialect: 'mysql'
});

//Template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());


//Rotas
app.get('/', function (req, res) {
  historics.findAll({
    attributes: ['name', [sequelize.fn('count', sequelize.col('name')), 'total']], 
    group: ['name'],
    limit: 5
  }).then(function (posts) {
    res.render('home', { posts: posts })
  });
});

app.post('/', function(req, res) {
  console.log("Entrou no post...")
  historics.create({
    name: req.body.name,
    qtd: 1
  })
});

app.listen(port, function() {
  console.log(`Servidor rodando na url http://localhost:${port}`);
});
