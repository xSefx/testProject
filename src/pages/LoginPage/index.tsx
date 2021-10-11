import React, { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Wrapper } from './styled'

import { useAppSelector } from '../../hooks'

import LoginForm from '../../containers/LoginForm'

interface ILoginPageProps extends RouteComponentProps<any> {}

const LoginPage = ({ history }: ILoginPageProps) => {
  const isLoggedIn = useAppSelector((state) => !!state.auth.sessionKey?.length)

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console')
    }
  }, [isLoggedIn])

  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  )
}

export default withRouter(LoginPage)
