import handleSubmit from './js/formHandler';
import { checkURL } from './js/checkURL';

// TODO: include your scss file here


window.addEventListener('DOMContentLoaded', () => {

    const buttonSubmit = document.querySelector('.btn-submit')
    buttonSubmit.addEventListener("click", () => {
        handleSubmit()
    })
})

export {
    checkURL,
    handleSubmit
}

// console.log('Hello Webpack');