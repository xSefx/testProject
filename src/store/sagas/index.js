import { all, fork } from 'redux-saga/effects'

import login from './auth'
import console from './console'

export default function* root() {
  yield all([fork(login), fork(console)])
}
