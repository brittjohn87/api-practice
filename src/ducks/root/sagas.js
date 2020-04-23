import { all } from 'redux-saga/effects';
import loginSagas from '../login/sagas';
import playlistsSagas from '../playlists/sagas';

export default function * rootSaga() {
    yield all([...loginSagas, ...playlistsSagas].map(saga => saga()));
}