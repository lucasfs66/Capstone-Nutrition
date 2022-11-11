const imagePlace = document.querySelector('.image-display')



axios.get('/recipe')
    .then((res) => {
        let objArr = res.data
        console.log(res.data)
        for(let i = 0; i <objArr.length; i++){
            getRecipes(i, objArr)
            
            imagePlace.appendChild(imageDiv)
        }
    })
    .catch(err => console.log(err))



const getRecipes = (i, objArr) => {
    let imageDiv = document.createElement('div')
    imageDiv.classList.add('image-page')

    imageDiv.innerHTML = `
            <img src="${objArr[i].imgurl}">
            <h3>${objArr[i].recipename}</h3>
    `

    
}