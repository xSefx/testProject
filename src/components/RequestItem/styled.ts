import styled from 'styled-components'

interface IRequestItemStatus {
  error: boolean
}

export const RequestItemContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
  margin-right: 10px;
`

export const RequestItemStatus = styled.div<IRequestItemStatus>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ error }) => (error ? '#CF2C00' : '#30B800')};
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-right: 5px;
`

export const DropdownButton = styled.div`
  margin-left: 5px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-contant: center;
`
