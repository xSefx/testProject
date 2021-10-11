import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks'
import { request, setRequest } from '../../store/reducers/console'

import { ConsoleFooterContainer, FormatButton } from './styled'

import Link from '../../components/LinkView'
import Button from '../../components/Button'

const ConsoleFooter = () => {
  const dispatch = useAppDispatch()
  const { requestMessage, loading, error } = useAppSelector(
    (state) => state.console
  )

  const [isValid, setIsValid] = useState(false)

  const formatRequest = (str: string): void => {
    try {
      setIsValid(false)
      const prepareString = JSON.parse(str)
      const formatString = JSON.stringify(prepareString, null, 4)
      dispatch(setRequest(formatString))
    } catch (e) {
      setIsValid(true)
    }
  }

  const sendRequest = () => {
    try {
      const prepareString = JSON.stringify(JSON.parse(requestMessage))
      dispatch(request(prepareString))
    } catch (e) {
      setIsValid(true)
    }
  }

  return (
    <ConsoleFooterContainer>
      <Button submit={sendRequest} title={'Отправить'} loading={loading} />
      <Link />
      <FormatButton onClick={() => formatRequest(requestMessage)}>
        <img src="icons/format.svg" alt="format" />
        <div>Форматировать</div>
      </FormatButton>
    </ConsoleFooterContainer>
  )
}

export default ConsoleFooter
