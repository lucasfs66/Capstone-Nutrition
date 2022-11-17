const form = document.querySelector('form')
const footer = document.querySelector('footer')

const button = document.getElementById('submit-btn')

const write = result =>{
    
    
    footer.innerHTML = `
    <div class="footer">
            <section class="maintain">
                <h2>${Math.floor(result)} Calorie per day</h2>
                <p>maintain your weight</p>
            </section>
            <section class="loseOne">
                <h2>${Math.floor(result) - 500} Calorie per day</h2>
                <p>lose 1 pound per week</p>
            </section>
            <section class="loseTwo">
                <h2>${Math.floor(result) - 1000} Calorie per day</h2>
                <p>lose 2 pound per week</p>
            </section>
    </div>
    `
}

const post = (event) => {
    event.preventDefault()
    const ageYou = document.getElementById('age')
    const male = document.getElementById('male')
    const female = document.getElementById('female')
    const cmYou = document.getElementById('height-cm')
    const weightYou = document.getElementById('weight')

    let object = {
        age: Number(ageYou.value),
        height: Number(cmYou.value),
        weight: Number(weightYou.value)
    }

    if(male.checked){
        object['gender'] = false
    }else if(female.checked){
        object['gender'] = true
    }

    
    if(object.age === '' || object.height === '' || object.weight === '' || object.gender === ''){
        alert('Fill out everything')
        return object
    }
    console.log(object)
    
    axios.post('/calculate',object)
        .then((res) => { 

            write(res.data.result) 
            
        })
        .catch(err => {
            console.log(err)
            console.log('Hello')
        })


}



button.addEventListener('click', post)