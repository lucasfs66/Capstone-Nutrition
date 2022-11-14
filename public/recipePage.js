const body = document.querySelector('body')


axios.post('/recipe', )
    .then((res) => {
        let objArr = res.data
        console.log(res.data)
        
           getRecipes(objArr, i) 
            
        
            
            
    })
    .catch(err => console.log(err))



const getRecipes = (obj, x) => {
    
    let imageDiv = document.createElement('div')
    imageDiv.classList.add('image-page')
    
    imageDiv.innerHTML = `
            <img src="${obj[x].imgurl}" class="image">
            <h3>${obj[x].recipename}</h3>
    `
    if(x % 2 !== 0) {
        imageDiv.classList.add('right')
    } else {
        imageDiv.classList.add('left')

    }
    imagePlace.appendChild(imageDiv)
}