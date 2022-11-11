const imagePlace = document.querySelector('.image-display')



axios.get('/recipe')
    .then((res) => {
        let objArr = res.data
        console.log(res.data)
        let count = 1
        for(let i = 0; i < objArr.length; i++){
           getRecipes(objArr, i) 
        }    
        
            
            
    })
    .catch(err => console.log(err))



const getRecipes = (obj, x, count) => {
    
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