import React, { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { ConsolePageContainer } from './styled'

import { useAppSelector } from '../../hooks'

import ConsoleHeader from '../../containers/ConsoleHeader'
import ConsoleHistory from '../../containers/ConsoleHistory'
import ConsoleMain from '../../containers/ConsoleMain'
import ConsoleFooter from '../../containers/ConsoleFooter'

interface ILoginPageProps extends RouteComponentProps<any> {}

const ConsolePage = ({ history }: ILoginPageProps) => {
  const isLoggedIn = useAppSelector((state) => !!state.auth.sessionKey?.length)

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/')
    }
  }, [isLoggedIn])

  return (
    <ConsolePageContainer>
      <ConsoleHeader />
      <ConsoleHistory />
      <ConsoleMain />
      <ConsoleFooter />
    </ConsolePageContainer>
  )
}

export default withRouter(ConsolePage)
