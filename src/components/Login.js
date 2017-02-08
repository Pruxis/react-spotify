import React from 'react';
import Spotify from 'spotify-web-api-node';
import Uuid from 'uuid/v4';

class Login extends React.Component {

    constructor() {
        super();
    }

    goToLibrary = (event) => {
        event.preventDefault();
    }

    loginSpotify = () => {
        const spotifyApi = new Spotify({
            clientId: "6440b10c7efd4e2da24f95dfc69761fa",
            clientSecret: "1b75161ef6b040f8a6a27e95989e74f5",
            redirectUri: "http://localhost:3000/library"
        });
        const scopes = 'user-read-private user-read-email playlist-modify-private playlist-modify-public playlist-read-private';
        window.location = spotifyApi.createAuthorizeURL(scopes, '');
    }



    render() {
        // Any where else
        return (
            <button className="btn btn-primary" onClick={() => this.loginSpotify()}>Click here to login on Spotify</button>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
}

export default Login;