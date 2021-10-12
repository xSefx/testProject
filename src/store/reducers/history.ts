import { createSlice } from '@reduxjs/toolkit'

interface IHistoryItem {
  request: string
  error: boolean
}

const initialState = {
  requestHistory: []
}

const historyReducer = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, { payload }) => {
      state.requestHistory = payload
    },
    removeHistory: (state, { payload }) => {
      state.requestHistory = state.requestHistory.filter(
        (el: IHistoryItem) => el.request !== payload
      )
    },
    clearHistory: (state) => {
      state.requestHistory = []
    }
  }
})

export const {
  setHistory,
  removeHistory,
  clearHistory
} = historyReducer.actions
export default historyReducer.reducer
