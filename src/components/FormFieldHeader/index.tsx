import React from 'react'
import { OPTIONAL, SUBLOGIN } from '../../constants'

import { FormFieldContainer, FormFieldTitle, FormFieldOptional } from './styled'

const FormFieldHeader = ({ title }: { title: string }) => {
  return (
    <FormFieldContainer>
      <FormFieldTitle>{title}</FormFieldTitle>
      {title === SUBLOGIN && <FormFieldOptional>{OPTIONAL}</FormFieldOptional>}
    </FormFieldContainer>
  )
}

export default React.memo(FormFieldHeader)
