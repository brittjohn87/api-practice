import { takeLatest } from 'redux-saga/effects';
import { onGetPlaylists } from './effects';

export const getPlaylistsSaga = function *() {
    yield takeLatest('playlists/GET_PLAYLISTS', onGetPlaylists);
}

export default [getPlaylistsSaga];