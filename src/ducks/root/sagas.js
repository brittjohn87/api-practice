import { all } from 'redux-saga/effects';
import locationSagas from '../location/sagas';

export default function * rootSaga() {
    yield all([...locationSagas].map(saga => saga()));
}