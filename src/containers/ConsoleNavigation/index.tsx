import React, { useCallback, useState } from 'react'

import { logout } from '../../store/reducers/auth'
import { useAppDispatch, useAppSelector } from '../../hooks'

import { SubLoginView, Logout, ConsoleNavigationContainer } from './styled'

const ConsoleNavigation = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const dispatch = useAppDispatch()
  const { login, sublogin } = useAppSelector((state) => state.auth)

  const loguot = useCallback(() => {
    dispatch(logout())
  }, [])

  const loginTitle = `${login}${sublogin ? ` : ${sublogin}` : ''}`

  const switchFullScreen = useCallback(() => {
    if (isFullScreen) {
      document.exitFullscreen()
      setIsFullScreen(false)
    } else {
      document.body.requestFullscreen()
      setIsFullScreen(true)
    }
  }, [])

  return (
    <ConsoleNavigationContainer>
      <SubLoginView>{loginTitle}</SubLoginView>
      <Logout onClick={loguot}>
        <div>Выйти</div>
        <img src="icons/log-out.svg" alt="logout" />
      </Logout>
      <div onClick={switchFullScreen}>
        <img src="icons/full-screen.svg" alt="full-screen" />
      </div>
    </ConsoleNavigationContainer>
  )
}

export default ConsoleNavigation
