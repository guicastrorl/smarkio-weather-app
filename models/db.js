const Sequelize = require('sequelize');

//Conexão com BD MYSQL
const sequelize = new Sequelize('historico', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(function() {
  console.log('Conexão realizada com sucesso');
}).catch(function(err) {
  console.log('Erro ao realizar conexão com BD: ' + err);
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
