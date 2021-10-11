import styled from 'styled-components'

export const View = styled.div`
  display: flex;
  padding: 10px;
  background: rgba(207, 44, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  color: #cf2c00;
  align-items: flex-start;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 5px;
`

export const Message = styled.span`
  opacity: 0.5;
  font-size: 12px;
`
