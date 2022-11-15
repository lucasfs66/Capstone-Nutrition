const form = document.querySelector('form')

const button = document.querySelector('button')



const post = (event) => {
    event.preventDefault()
    const recipeName = document.getElementById('name')
    const ingredient = document.querySelector('#ingredients')
    const instruction = document.querySelector('#instruction')
    const nutriction = document.querySelector('#nutriction')
    const imagURL = document.getElementById('url')

    let newRecipe = {
        nameRecipe: recipeName.value,
        ingr: ingredient.value,
        inst: instruction.value,
        nut: nutriction.value,
        url: imagURL.value
    }
    
    console.log('hello')
    console.log(newRecipe)
    axios.post('/createrecipe',newRecipe).then((res) => { console.log(res)}).catch(err => console.log(err))
    alert('recipe created')

}



button.addEventListener('click', post)


