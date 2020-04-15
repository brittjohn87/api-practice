import { takeLatest } from 'redux-saga/effects';
import { onLogin } from './effects';

export const loginSaga = function *() {
    yield takeLatest('login/LOGIN', onLogin);
}

export default [loginSaga];