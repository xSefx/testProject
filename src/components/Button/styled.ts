import styled from 'styled-components'

export const ButtonUi = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ disabled }) =>
    disabled
      ? 'linear-gradient(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%)'
      : 'linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4'};
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  line-height: 30px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;

  height: 40px;
  width: 110px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
      ),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }

  &:focus {
    border: 2px solid #45a5ff;
  }

  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
`
