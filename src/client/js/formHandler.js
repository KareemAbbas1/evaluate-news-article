import { checkURL } from "./checkURL"

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    try {
        return await response.json()
    }
    catch (error) {
        console.log('error', error)
    }
}

const handleSubmit = async (event) => {
    event.preventDefault();
    
    const url = document.getElementById('article-url').value
    // console.log(url)

    if(checkURL(url)) {
        post('http://localhost:8081/add-url', {url}).then(data => {

            document.getElementById('text').innerHTML = `Text: ${data.text}`
            document.getElementById('score_tag').innerHTML = `Polarity: ${data.score_tag}`
            document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
            document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
            document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
            // console.log(data)
        })

    }

    else {
        alert('Please enter a valid URL')
    }

}

export default handleSubmit

/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */