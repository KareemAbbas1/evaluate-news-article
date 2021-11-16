import handleSubmit from './js/formHandler';
import { checkURL } from './js/checkURL';

import './styles/style.css';

const buttonSubmit = document.querySelector('.btn-submit')

if(document.readyState !== 'loading') {
    console.log('Document is already ready, just execute code here');
    buttonSubmit.addEventListener("click", (event) => {
        handleSubmit(event)
    })
}

else {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Document was not ready, place code here');
        buttonSubmit.addEventListener("click", (event) => {
            handleSubmit(event)
        })
    });
}




export {
    checkURL,
    handleSubmit
}
