const body = document.querySelector('body')

let image = ['./background-morango.jpg', './background-oran.jpg', './background-grapes.jpg']

const imageBack = arr => {
    for(let i = 0; i < arr.length; i++){
       body.style.cssText = `background-image:url('${arr[i]}');` 

    }
    
}


imageBack(image)