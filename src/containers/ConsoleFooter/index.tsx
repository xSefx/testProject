import React, { useCallback, useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks'
import { request, setRequest } from '../../store/reducers/console'

import { ConsoleFooterContainer, FormatButton } from './styled'

import Link from '../../components/LinkView'
import Button from '../../components/Button'

const ConsoleFooter = () => {
  const dispatch = useAppDispatch()
  const { requestMessage, loading } = useAppSelector((state) => state.console)

  // Todo implement error handling
  const [isValid, setIsValid] = useState(false)

  const formatRequest = useCallback((str: string): void => {
    try {
      setIsValid(false)
      const prepareString = JSON.parse(str)
      const formatString = JSON.stringify(prepareString, null, 4)
      dispatch(setRequest(formatString))
    } catch (e) {
      setIsValid(true)
    }
  }, [])

  const sendRequest = useCallback(() => {
    console.log('try')

    try {
      const prepareString = JSON.stringify(JSON.parse(requestMessage))
      dispatch(request(prepareString))
    } catch (e) {
      setIsValid(true)
    }
  }, [requestMessage])

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

export default React.memo(ConsoleFooter)
