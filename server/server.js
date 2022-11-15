const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {home, getRecipe, getSpecRecipe, createRecipe} = require('./pageCntrl')



app.get('/', home);

app.get('/recipe', getRecipe);

app.post('/specrecipe', getSpecRecipe);

app.post('/createrecipe', createRecipe);

app.post('/calculate', (req, res) =>{
        let {age, height, weight, gender} = req.body
        let result = 0
        if(gender === false){
            result = 88.362 + (13.397 * (weight / 2.20462)) + (4.799 * height) - (5.677 * age) 
        }else if(gender === true){
            result = 447.593 + (9.247 * (weight / 2.20462)) + (3.098 * height) - (4.330 * age)
        }
            console.log(result)
            res.status(200).send({result: result})
});

app.use(express.static('public'));


const {PORT} = process.env

app.listen(PORT, () => console.log(`Server lightening on port ${PORT}`))