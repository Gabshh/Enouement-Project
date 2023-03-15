'use strict'

const input = document.querySelector('#cpf-input');
const phoneInput = document.querySelector('#phone-input');
const label = document.querySelector('#cpf-label');

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    if (inputLength === 3 || inputLength === 7) {
        input.value += '.' 
    }else if (inputLength === 11) {
        input.value += '-'
    }
})

phoneInput.addEventListener('keypress', () => {
    let inputLength = phoneInput.value.length

    if (inputLength === 0) {
        phoneInput.value += '('
    }else if (inputLength === 3) {
        phoneInput.value += ')'
    }else if (inputLength === 8) {
        phoneInput.value += '-'
    }
})

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    if (inputLength === 1) {
        label.style.transform=translateY('-73px');
    }else if (inputLength === 0) {
        label.style.transform=translateY('-45px');
    }
})


