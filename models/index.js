const Sequelize = require('sequelize')
const config = require('../config.json')
const userSchema = require('./user')
const productSchema = require('./products')

const dbConfig = config.db
const sequelize = new Sequelize(dbConfig.db_name, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 5,
        acquire: 30000,
        idle: 10000
    }
})



// sequelize.sync({ force: false }).then(data => {
//     console.log("tables are synced")
// }).catch(err => {
//     console.log("error ", err)
// })
const UserModel = userSchema(sequelize, Sequelize);
const ProductModel = productSchema(sequelize, Sequelize)

module.exports = {
    UserModel,
    ProductModel
}

