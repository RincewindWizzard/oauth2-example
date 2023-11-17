import "bulma"
import "./style/main.scss"

const contentSection = document.getElementById('content')


const urlParams = new URLSearchParams(window.location.search);
const authorizationCode = urlParams.get('code');
if(authorizationCode) {
    if(contentSection) {
        contentSection.innerHTML = `authorizationCode = ${authorizationCode}`
    }
} else {
    const token = localStorage.getItem('token')
    if(!token) {
        const clientID = '893fc9cabde21ec35f77'
        const redirectURI = 'https://rincewindwizzard.github.io/oauth2-example/'
        const authURL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}`

        console.log(authURL)
        if(contentSection) {
            contentSection.innerHTML = `<a href="${authURL}">Login</a>`
        }
    } else {

    }
}






