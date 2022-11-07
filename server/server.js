const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {home} = require('./pageCntrl')



app.get('/', home)

app.use(express.static('public'));


const {PORT} = process.env

app.listen(PORT, () => console.log(`Server lightening on port ${PORT}`))