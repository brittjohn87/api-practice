import { call, put } from 'redux-saga/effects';
import { getPlaylists } from '../../services/playlist-service';
import { setPlaylists } from './actions';

export const onGetPlaylists = function * ({ payload }) {
    const response = yield call(getPlaylists, payload);
    yield put(setPlaylists(response.data.items));
    localStorage.setItem('token', response.headers['x-token']);
}
