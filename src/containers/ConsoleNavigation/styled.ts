import styled from 'styled-components'

export const ConsoleNavigationContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SubLoginView = styled.div`
  display: flex;
  border-radius: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 15px;
  margin-right: 30px;

  @media (max-width: 680px) {
    display: none;
  }
`
export const Logout = styled.button`
  display: flex;
  align-items: center;
  width: 82px;
  background: #f6f6f6;
  height: 24px;
  margin-right: 30px;
  border: none;

  & > div {
    margin-right: 10px;
    font-size: 16px;
  }
`
