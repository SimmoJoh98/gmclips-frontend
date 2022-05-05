const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
require('dotenv').config()
// let { DATABASE_URL } = process.env //USE THIS IMPORT FOR HEROKU DEPLOYMENT!!!
let { LDEV } = process.env // USE THIS IMPORT FOR LOCAL DEVELOPMENT!!!
const SQL = new Sequelize(LDEV, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    deletePost: async (req,res) => {

    },
    likePost: async(req,res) => {
        //backend logic
    },
    commentOnPost: async (req,res) => {

    }
}