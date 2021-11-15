import handleSubmit from './js/formHandler';
import { checkURL } from './js/checkURL';

import './styles/style.css';

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
