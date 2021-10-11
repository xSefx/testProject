import { all, put, call, takeLatest } from 'redux-saga/effects'
import api from '../../helpers/sendsay'

import {
  authenticate,
  authenticateSuccess,
  authenticateFailure,
  logout,
  setErrorMessage
} from '../reducers/auth'
import { authenticateCheck } from '../actions'

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong'
    })
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga)
    }
  }
}

export function* authenticateSaga({ payload }) {
  let error
  let errorPayload

  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password
    })
    .then(() => {
      error = false
      document.cookie = `sendsay_session=${api.sendsay.session}`
    })
    .catch((err) => {
      error = true
      document.cookie = ''

      console.log('err', err, typeof err)
      errorPayload = { explain: err.explain, id: err.id }
    })

  if (error) yield put(setErrorMessage(errorPayload))

  yield put(
    error
      ? authenticateFailure()
      : authenticateSuccess({
          sessionKey: api.sendsay.session,
          login: payload.login,
          sublogin: payload.sublogin
        })
  )
}

export function* logoutSaga() {
  yield put(authenticateFailure())
  document.cookie = ''
}

export default function* root() {
  yield all([
    takeLatest(authenticate.type, authenticateSaga),
    takeLatest(authenticateCheck.type, authenticateCheckSaga),
    takeLatest(logout.type, logoutSaga)
  ])
}
