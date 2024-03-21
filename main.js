const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.getElementById('number')

    if(inputNumber.value == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h1").innerText = 'acertou em ' + xAttempts + ' tentativas'
    }
    xAttempts++
    inputNumber.value = ""
    
}


const btnTry = document.getElementById('try')
const playAgain = document.getElementById('playAgain')

btnTry.addEventListener('click', handleClick)
playAgain.addEventListener('click', function() {
    xAttempts = 1
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
})