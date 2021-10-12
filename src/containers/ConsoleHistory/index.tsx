import React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { ConsoleHistoryContainer, CloseButton } from './styled'
import { clearHistory } from '../../store/reducers/history'

import RequestItem from '../../components/RequestItem'

interface IAction {
  request: string
  error: boolean
}

const ConsoleHistory = () => {
  const dispatch = useAppDispatch()
  const { requestHistory } = useAppSelector((state) => state.history)

  return (
    <ConsoleHistoryContainer>
      {requestHistory.map(({ request, error }: IAction) => {
        return <RequestItem key={request} request={request} error={error} />
      })}
      <CloseButton onClick={() => dispatch(clearHistory())}>
        <img src="icons/cross.svg" alt="close" />
      </CloseButton>
    </ConsoleHistoryContainer>
  )
}

export default ConsoleHistory
