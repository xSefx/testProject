import React, { useEffect, useRef } from 'react'

import { DropdownContainer, DropdownItem } from './styled'

import {
  setRequest,
  request as dispatchRequest
} from '../../store/reducers/console'
import { removeHistory } from '../../store/reducers/history'
import { useAppDispatch } from '../../hooks'

interface IDropdownProps {
  isOpen: boolean
  request: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Dropdown = ({ isOpen, request, setIsOpen }: IDropdownProps) => {
  const dispatch = useAppDispatch()

  const executeRequest = () => {
    dispatch(setRequest(JSON.stringify(JSON.parse(request), null, 4)))
    dispatch(dispatchRequest(request))
    setIsOpen(!isOpen)
  }

  const copyRequest = () => {
    navigator.clipboard.writeText(JSON.stringify(JSON.parse(request), null, 4))
    setIsOpen(!isOpen)
  }

  const removeRequest = () => {
    dispatch(removeHistory(request))
    setIsOpen(!isOpen)
  }

  const ref = useRef()

  // TODO implement hide dropdown by outside click

  // const handleOutsideClick = (event: any) => {
  //   const path = event.path || (event.composedPath && event.composedPath())
  //   if (!path.includes(ref.current)) {
  //     setIsOpen(false)
  //   }
  // }

  // useEffect(() => {
  //   document.body.addEventListener('click', handleOutsideClick)
  //   return () => {
  //     document.body.removeEventListener('click', handleOutsideClick)
  //   }
  // }, [])

  return (
    <DropdownContainer ref={ref} isOpen={isOpen}>
      <DropdownItem destroy={false} onClick={executeRequest}>
        Выполнить
      </DropdownItem>
      <DropdownItem destroy={false} onClick={copyRequest}>
        Скопировать
      </DropdownItem>
      <DropdownItem destroy={true} onClick={removeRequest}>
        Удалить
      </DropdownItem>
    </DropdownContainer>
  )
}

export default React.memo(Dropdown)
