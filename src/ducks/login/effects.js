import { call, put } from 'redux-saga/effects';
import { login } from '../../services/login-service';
import { setUserData } from '../user/actions';

export const onLogin = function * ({ payload }) {
    const response = yield call(login, payload);
    yield put(setUserData(response.data));
    localStorage.setItem('token', response.headers['x-token']);
}
