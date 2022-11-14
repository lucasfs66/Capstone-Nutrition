const body = document.querySelector('body')
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.some_key; // "some_value"

  let valueFinal = params.id

axios.post('/specrecipe', {id: valueFinal})
    .then((res) => {
        let objArr = res.data
        console.log(res.data)
        
        getRecipes(objArr) 
            
        
            
            
    })
    .catch(err => console.log(err))



const getRecipes = (obj) => {
    
    let pageDiv = document.createElement('div')
    
    pageDiv.innerHTML = `
    <a href="recipe.html"><img src="iconX.png" alt="X"></a>
    <header class="image-big">
        <img src="${obj[0].imgurl}" alt="recipe">
        <h2>Name</h2>
    </header>
    <main class="text">
        
        <div class="ingredient">
            <h3>Ingredients:</h3>
            <p>${obj[0].recipeingr}</p>
        </div>
        <div class="instruction">
            <h3>Instruction:</h3>
            <p>${obj[0].recipetext}</p>
        </div>
        <div class="Nutriction">
            <h3>Nutriction:</h3>
            <p>${obj[0].nutritiontable}</p>
        </div>
    </main>
    `
    body.appendChild(pageDiv)
}