const db = require('./db')

const historics = db.sequelize.define('historics', {
  name: {
    type: db.Sequelize.STRING
  },
  qtd: {
    type: db.Sequelize.INTEGER
  }
});

//historics.sync({ force: true })

module.exports = historics;