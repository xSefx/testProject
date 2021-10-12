import React from 'react'

import { View, MessageContainer, Title, Message } from './styled'

import { useTypedSelector } from '../../hooks'
import { ERROR_LOGIN } from '../../constants'

const ErrorView = () => {
  const {
    errorMessage: { id, explain }
  } = useTypedSelector((state) => state.auth)
  const error = `{id: "${id}", explain: "${explain}"}`

  return (
    <View>
      <div>
        <img src="icons/error.svg" alt="error" />
      </div>
      <MessageContainer>
        <Title>{ERROR_LOGIN}</Title>
        <Message>{error}</Message>
      </MessageContainer>
    </View>
  )
}

export default ErrorView
