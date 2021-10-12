import React from 'react'

import { ConsoleMainContainer } from './styled'

import { useAppSelector } from '../../hooks'

import Text from '../../components/Text'

const ConsoleMain = () => {
  const { requestMessage, responseMessage, error } = useAppSelector(
    (state) => state.console
  )
  return (
    <ConsoleMainContainer>
      <Text value={requestMessage} error={error} />
      <Text value={responseMessage} readonly={true} error={error} />
    </ConsoleMainContainer>
  )
}

export default ConsoleMain
