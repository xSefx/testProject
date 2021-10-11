import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
  errorMessage: {},
  sessionKey: null,
  login: null,
  sublogin: null
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.loading = true
      state.error = false
    },
    authenticateSuccess: (state, { payload }) => {
      state.loading = false
      state.sessionKey = payload.sessionKey
      state.login = payload.login
      state.sublogin = payload.sublogin
    },
    authenticateFailure: (state) => {
      state.loading = false
      state.sessionKey = null
      state.login = null
      state.sublogin = null
    },
    logout: (state) => {
      state.loading = false
      state.sessionKey = null
    },
    setErrorMessage: (state, { payload }) => {
      state.error = true
      state.errorMessage = { ...payload }
    }
  }
})

export default authReducer.reducer
export const {
  authenticate,
  authenticateFailure,
  authenticateSuccess,
  logout,
  setErrorMessage
} = authReducer.actions
