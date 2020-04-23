import axios from 'axios';
import querystring from 'querystring';

const url = "http://localhost:3333/playlists";

export const getPlaylists = () => {
    const token = localStorage.getItem('token');
    return axios.get(`${url}?${querystring.stringify({ token })}`);
}