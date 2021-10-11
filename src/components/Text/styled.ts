import styled from 'styled-components'

interface ITextAreaProps {
  error: boolean
}

export const TextArea = styled.textarea<ITextAreaProps>`
  resize: none;
  padding: 10px;
  flex-grow: 1;
  font-size: 18px;
  min-width: 400px;
  min-height: 400px;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? '#CF2C00' : '#cccccc')};
  border-radius: 5px;
`
