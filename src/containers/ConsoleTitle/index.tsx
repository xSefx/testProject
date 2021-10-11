import React from 'react'

import { Title, ConsoleTitleContainer } from './styled'

import Logo from '../../components/Logo'

const ConsoleTitle = () => {
  return (
    <ConsoleTitleContainer>
      <div>
        <Logo />
      </div>
      <Title>API-консолька</Title>
    </ConsoleTitleContainer>
  )
}

export default ConsoleTitle
