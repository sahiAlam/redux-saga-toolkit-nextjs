import { all } from "redux-saga/effects";
import {  watchFetchUserById, watchFetchUsers } from "./sagas/users.saga";

export default function* rootSaga() {
    yield all([
        watchFetchUsers(),
        watchFetchUserById()
    ])
}