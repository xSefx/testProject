import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  requestMessage: '',
  error: false,
  loading: false,
  responseMessage: ''
}

const consoleReducer = createSlice({
  name: 'console',
  initialState,
  reducers: {
    setRequest: (state, { payload }) => {
      state.requestMessage = payload
    },
    request: (state, { payload }) => {
      state.loading = true
      state.error = false
    },
    requestSuccess: (state, { payload }) => {
      state.loading = false
      state.responseMessage = payload
    },
    requestFailure: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.responseMessage = payload
    }
  }
})

export default consoleReducer.reducer

export const {
  setRequest,
  request,
  requestFailure,
  requestSuccess
} = consoleReducer.actions
