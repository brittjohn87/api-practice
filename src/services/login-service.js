import axios from 'axios';
import querystring from 'querystring';

const url = "http://localhost:3333/login";

export const login = async({
    code,
    redirect_uri
}) => {
    return axios.get(`${url}?${querystring.stringify({code, redirect_uri})}`)
}