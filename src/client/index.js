import handleSubmit from './js/formHandler';
import { checkURL } from './js/checkURL';


const buttonSubmit = document.querySelector('.btn-submit')

if(document.readyState !== 'loading') {
    console.log('Document is already ready, just execute code here');
    buttonSubmit.addEventListener("click", () => {
        handleSubmit()
    })
}

else {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Document was not ready, place code here');
        buttonSubmit.addEventListener("click", () => {
            handleSubmit()
        })
    });
}




export {
    checkURL,
    handleSubmit
}

// window.addEventListener('DOMContentLoaded', () => {
    
//     const buttonSubmit = document.querySelector('.btn-submit')
//     buttonSubmit.addEventListener("click", () => {
//         handleSubmit()
//     })
// })


// TODO: include your scss file here
// console.log('Hello Webpack');