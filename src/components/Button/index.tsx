import React from 'react'

import { ButtonUi } from './styled'

import Loader from '../Loader'

interface IButton {
  title: string
  disabled?: boolean
  submit: any
  loading: boolean
}

const Button = ({ title, disabled = false, submit, loading }: IButton) => {
  return (
    <ButtonUi disabled={disabled} onClick={submit}>
      {loading ? <Loader /> : title}
    </ButtonUi>
  )
}

export default React.memo(Button)
