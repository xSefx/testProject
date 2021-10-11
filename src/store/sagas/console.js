import { all, put, takeLatest, select } from 'redux-saga/effects'
import api from '../../helpers/sendsay'

import { request, requestSuccess, requestFailure } from '../reducers/console'
import { setHistory } from '../reducers/history'

function prepareHistory(history, currentRequest, error) {
  const filterHistory = history.filter((el) => el.request !== currentRequest)

  if (filterHistory.length === history.length) {
    return [{ request: currentRequest, error }, ...filterHistory]
  }
  return [{ request: currentRequest, error }, ...filterHistory]
}

export function* requestSage({ payload }) {
  const { requestHistory } = yield select((state) => state.history)
  let error = false
  let response

  yield api.sendsay
    .request(JSON.parse(payload))
    .then((data) => {
      response = JSON.stringify(data, null, 4)
    })
    .catch((err) => {
      error = true
      response = JSON.stringify(err, null, 4)
    })

  const currentHistory = prepareHistory(requestHistory, payload, error)

  yield put(error ? requestFailure(response) : requestSuccess(response))
  yield put(setHistory(currentHistory))
}

export default function* root() {
  yield all([takeLatest(request.type, requestSage)])
}
