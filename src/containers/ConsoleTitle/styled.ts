import styled from 'styled-components'

export const ConsoleTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h2`
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;

  @media (max-width: 839px) {
    display: none;
  }
`
