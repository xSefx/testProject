import React from 'react'

import { FormFieldContainer, FormFieldTitle, FormFieldOptional } from './styled'

const FormFieldHeader = ({ title }: { title: string }) => {
  return (
    <FormFieldContainer>
      <FormFieldTitle>{title}</FormFieldTitle>
      {title === 'Сублогин' && (
        <FormFieldOptional>Опционально</FormFieldOptional>
      )}
    </FormFieldContainer>
  )
}

export default React.memo(FormFieldHeader)
