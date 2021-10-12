import styled from 'styled-components'

interface IDropdownProps {
  isOpen: boolean
  ref: any
}

interface IDropdownItemProps {
  destroy: boolean
}

export const DropdownContainer = styled.ul<IDropdownProps>`
  position: absolute;
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  top: 80px;
  padding: 5px 0px;
  align-items: flex-start;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`
export const DropdownItem = styled.li<IDropdownItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  width: 100%;

  border-top: ${({ destroy }) =>
    destroy ? '1px solid rgba(0, 0, 0, 0.2)' : 'none'};

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${({ destroy }) =>
      destroy ? '#cf2c00' : 'rgb(14, 0, 207)'};
  }
`
