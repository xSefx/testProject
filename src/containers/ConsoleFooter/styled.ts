import styled from 'styled-components'

export const ConsoleFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

export const FormatButton = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    color: #0055fb;
    cursor: pointer;
  }

  & > div {
    margin-left: 8px;
  }
`
