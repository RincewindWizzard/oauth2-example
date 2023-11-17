import "bulma"
import "./style/main.scss"

const clientID = '893fc9cabde21ec35f77'
const redirectURI = 'https://rincewindwizzard.github.io/oauth2-example/'
const contentSection = document.getElementById('content')

async function exchangeCodeForAccessToken(authorizationCode: string) {
    const tokenEndpoint = 'https://github.com/login/oauth/access_token';

    try {
        const response = await fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: clientID,
                client_secret: 'DEIN_GITHUB_CLIENT_SECRET',
                code: authorizationCode,
                redirect_uri: redirectURI,
            }),
        });

        const tokenData = await response.json();
        console.log('Access Token:', tokenData.access_token);
    } catch (error) {
        console.error('Fehler beim Abrufen des Zugriffstokens:', error);
    }
}


const urlParams = new URLSearchParams(window.location.search);
const authorizationCode = urlParams.get('code');
if (authorizationCode) {
    if (contentSection) {
        contentSection.innerHTML = `authorizationCode = ${authorizationCode}`
    }

    exchangeCodeForAccessToken(authorizationCode).then(() => {
        console.log('foo')
    })
} else {
    const token = localStorage.getItem('token')
    if (!token) {

        const authURL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}`

        console.log(authURL)
        if (contentSection) {
            contentSection.innerHTML = `<a href="${authURL}">Login</a>`
        }
    } else {

    }
}






