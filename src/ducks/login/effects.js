import { call, put } from 'redux-saga/effects';
import { login } from '../../services/login-service';

export const onLogin = function * ({ payload }) {
    yield call(login, [payload])
}