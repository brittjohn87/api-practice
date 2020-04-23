export const getPlaylists = () => ({
    type: 'playlists/GET_PLAYLISTS',
    payload: {}
});

export const setPlaylists = (payload) => ({
    type: 'playlists/SET_PLAYLISTS',
    payload
});