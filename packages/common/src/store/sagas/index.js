import { put, takeLatest, all } from 'redux-saga/effects';
import {loginUser} from "../actions/UserAction"

export default function* rootSaga() {
   yield all([
    loginUser(),
   ]);
}