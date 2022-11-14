
const path = require('path');

require('dotenv').config();

const Sequelize = require('sequelize')

let {CONNECTION_STRING} = process.env

let sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    },
  }
  )



module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    },

    getRecipe: (req, res) => {
            sequelize.query(`
                SELECT * FROM recipes;
            `)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch(err => console.log('errado'))
    },
    getSpecRecipe: (req, res) => {
        let id = req.body.id
        sequelize.query(`
            SELECT * FROM recipes WHERE id = ${id};
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log('errado'))
    }
}