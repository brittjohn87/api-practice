import React from 'react';
import {useSelector} from 'react-redux';
import querystring from 'querystring';
import {getUserId} from '../ducks/user/selectors';
import { getPlaylists } from '../ducks/playlists/selectors';

export const Login = () => {

    const userId = useSelector(getUserId);
    const playlists = useSelector(getPlaylists);

    const loginWithSpotify = () => {
        const scope = 'user-read-private user-read-email';
        window.location.href='https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT,
        state: 'hello'
      });
  };
    return (
        <div className="d-flex flex-column justify-content-center align-items-center m-5">
            { userId ? 
                <>
                    {playlists.map(item => <iframe key={item.external_urls.spotify} src={`https://open.spotify.com/embed/${item.type}/${item.id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>)} </> :
                <>
                    <h3>Login Spotify</h3>
                    <div>
                    <button className="btn btn-success" onClick={loginWithSpotify}>Login</button>
                    </div>
                </>
            }
        </div>
    )
}