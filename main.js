let mainInput = document.createElement('main')
document.body.append(mainInput)

let myButton = document.createElement('button')
myButton.append('Remove')
document.body.append(myButton)
myButton.addEventListener('click', function(){
    mainInput.remove(mainInput)
})


let imgElement = document.createElement('img')
imgElement.src = 'https://i.pinimg.com/564x/2d/ae/b5/2daeb534859e334ba4c5399b3e174a69.jpg'
mainInput.append(imgElement)


let anchorElement = document.createElement('a')
anchorElement.href = 'https://www.thisiswhyimbroke.com/'
anchorElement.append('This Is Why I\'m Broke')
mainInput.append(anchorElement)

