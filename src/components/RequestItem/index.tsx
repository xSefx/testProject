import React, { useState } from 'react'

import {
  RequestItemContainer,
  RequestItemStatus,
  DropdownButton
} from './styled'

import Dropdown from '../Dropdown'

interface IActionProps {
  request: string
  error: boolean
}

const RequestItem = ({ request, error }: IActionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <RequestItemContainer>
      <RequestItemStatus error={error} />
      {JSON.parse(request).action}
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <img src="icons/dots.svg" alt="dropdown" />
      </DropdownButton>
      <Dropdown isOpen={isOpen} request={request} setIsOpen={setIsOpen} />
    </RequestItemContainer>
  )
}

export default RequestItem
