// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrraper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal-wrapper .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

const Modal = {

    wrraper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrraper.classList.add('open')
    },
    close() {
        Modal.wrraper.classList.remove('open')
    }
}

form.onsubmit = function (event) {
    event.preventDefault() // evitar padrão 

    const weight = inputWeight.value
    const height = inputHeight.value
 
    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    //modalWrraper.classList.add('open')
    Modal.open()
}

Modal.buttonClose.onclick = function() {
    //modalWrraper.classList.remove('open')
    Modal.close()
}

//Calculo IMC
// Elevar numero (**)
function IMC(weight, height){
    return (weight / ((height / 100) **2 )).toFixed(2)
}

