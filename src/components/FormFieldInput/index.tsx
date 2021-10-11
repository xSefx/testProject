import React from 'react'
import { InputForm } from './styled'

type InputType = 'text' | 'password'

interface IFormFieldInput {
  name: string
  type: InputType
  value: string
  handleChange: any
  handleBlur: any
}

const FormFieldInput = ({
  type,
  name,
  value,
  handleChange,
  handleBlur
}: IFormFieldInput) => {
  return (
    <InputForm
      type={type}
      name={name}
      onChange={handleChange}
      value={value}
      onBlur={handleBlur}
    />
  )
}

export default FormFieldInput
