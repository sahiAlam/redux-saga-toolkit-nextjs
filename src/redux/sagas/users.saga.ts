import { SagaIterator } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure, fetchUserByIdSuccess, fetchUserByIdFailure } from '@/redux/slices/users.slice';
import { USERS_ENDPOINT } from '@/redux/services/endpoints';
import { fetchUsersFromApi } from '@/redux/services/apiClients/fetchUsersFromApi';

// Worker functions for users saga
function* fetchUsersSaga(): SagaIterator {
  try {
    const users = yield call(fetchUsersFromApi, USERS_ENDPOINT.USERS);
    yield put(fetchUsersSuccess(users));
  } catch (error:any) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* fetchUserByIdSaga(action:any): SagaIterator {
  try {
    const user = yield call(fetchUsersFromApi, USERS_ENDPOINT.USER_BY_ID(action.payload));
    yield put(fetchUserByIdSuccess(user));
  } catch (error:any) {
    yield put(fetchUserByIdFailure(error.message));
  }
}

// watcher functions for users saga
export function* watchFetchUsers() {
  yield takeEvery('users/fetchUsersStart', fetchUsersSaga);
}

export function* watchFetchUserById() {
  yield takeEvery('users/fetchUserByIdStart', fetchUserByIdSaga)
}