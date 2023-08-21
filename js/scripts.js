import { Modal } from "./modal.js"

// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertError = document.querySelector('.alert-error')

//const modalWrraper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal-wrapper .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

inputWeight.oninput = () => alertError.classList.remove('open')
inputHeight.oninput = () => alertError.classList.remove('open')

form.onsubmit = function (event) {
    event.preventDefault() // evitar padrão 

    const weight = inputWeight.value
    const height = inputHeight.value
 
    const result = IMC(weight, height)

    //Mensagem de erro
    if(!result){
       return alertError.classList.add('open')
    }

    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    //modalWrraper.classList.add('open')
    Modal.open()
}

//Calculo IMC
// Elevar numero (**)
function IMC(weight, height){
    if (Number(weight) && Number(height)) {
        return (weight / ((height / 100) **2 )).toFixed(2)
    }
    return false
}