import React, { ChangeEvent } from 'react'

import { useAppDispatch } from '../../hooks'
import { setRequest } from '../../store/reducers/console'

import { TextArea } from './styled'

interface IPropsTextArea {
  value: string
  readonly?: boolean
  error: boolean
}

const Text = ({ value, readonly = false, error }: IPropsTextArea) => {
  const dispatch = useAppDispatch()
  const setValueToRequest = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(setRequest(e.target.value))
  }

  return (
    <TextArea
      error={error}
      readOnly={readonly}
      value={value}
      onChange={setValueToRequest}
    />
  )
}
export default React.memo(Text)
