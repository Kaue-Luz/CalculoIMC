export const Modal = {

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

Modal.buttonClose.onclick = function() {
    //modalWrraper.classList.remove('open')
    Modal.close()
}