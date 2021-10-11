import React from 'react'

import { ConsoleHeaderContainer } from './styled'

import ConsoleTitle from '../ConsoleTitle'
import ConsoleNavigation from '../ConsoleNavigation'

const ConsoleHeader = () => {
  return (
    <ConsoleHeaderContainer>
      <ConsoleTitle />
      <ConsoleNavigation />
    </ConsoleHeaderContainer>
  )
}

export default ConsoleHeader
