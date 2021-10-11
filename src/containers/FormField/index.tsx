import React from 'react'

import { FormFieldContainer } from './styled'

import FormFieldHeader from '../../components/FormFieldHeader'
import FormFieldInput from '../../components/FormFieldInput'

type InputType = 'text' | 'password'

interface IFormField {
  title: string
  name: string
  type: InputType
  value: string
  handleChange: any
  handleBlur: any
}

const FormField = ({
  title,
  name,
  type,
  value,
  handleBlur,
  handleChange
}: IFormField) => {
  return (
    <FormFieldContainer>
      <FormFieldHeader title={title} />
      <FormFieldInput
        name={name}
        type={type}
        value={value}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </FormFieldContainer>
  )
}

export default FormField
