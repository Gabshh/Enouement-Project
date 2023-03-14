'use strict'

let state = false;

const toggle = () => {
    if(state){
        document.getElementById('password-input').setAttribute('type', 'password');
        document.getElementById('olho-icon').style.color='#979797';
        state = false;
    }else {
        document.getElementById('password-input').setAttribute('type', 'text');
        document.getElementById('olho-icon').style.color='#9B81FF';
        state = true;
    }
}