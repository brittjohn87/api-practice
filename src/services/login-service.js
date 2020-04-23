import axios from 'axios';
import querystring from 'querystring';

const url = "http://localhost:3333/login";

export const login = ({
    code
}) => {
    return axios.get(`${url}?${querystring.stringify({ code, redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT })}`)
}