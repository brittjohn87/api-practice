import React from 'react';
import querystring from 'querystring';

export const Login = () => {

    const loginWithSpotify = () => {
        const scope = 'user-read-private user-read-email';
        window.location.href='https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: 'http://localhost:3000/callback',
        state: 'hello'
      });
  };
    return (
        <div className="d-flex flex-column justify-content-center align-items-center m-5">
            <h3>Login Spotify</h3>
            <div>
            <button className="btn btn-success" onClick={loginWithSpotify}>Login</button>
            </div>
        </div>
    )
}