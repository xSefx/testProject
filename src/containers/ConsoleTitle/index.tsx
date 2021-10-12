import React from 'react'

import { Title, ConsoleTitleContainer } from './styled'

import Logo from '../../components/Logo'
import { TITLE } from '../../constants'

const ConsoleTitle = () => {
  return (
    <ConsoleTitleContainer>
      <div>
        <Logo />
      </div>
      <Title>{TITLE}</Title>
    </ConsoleTitleContainer>
  )
}

export default ConsoleTitle
