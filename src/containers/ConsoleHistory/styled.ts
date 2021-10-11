import styled from 'styled-components'

// export const ConsoleHistoryContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 15px;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
// `

export const ConsoleHistoryContainer = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  min-height: 50px;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  border: none;
  right: 0;
  justify-content: center;
  align-items: center;

  background: #f6f6f6;
  width: 50px;
  height: 48px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`

// export const CloseButton = styled.button`
//   background: transparent;
//   padding: 0;
//   border: none;
//   position: fixed;
//   width: 50px;
//   border-left: 1px solid #c4c4c4;
//   right: 0;
//   top: 55px;
//   cursor: pointer;
//   background: #f6f6f6;

//   &::before {
//     content: '';
//     position: absolute;
//     background: linear-gradient(
//       269.93deg,
//       #f6f6f6 0.06%,
//       rgba(246, 246, 246, 0) 99.93%
//     );
//     width: 15px;
//     height: 100%;
//     top: 0;
//     left: -16px;
//   }
// `

export const HistoryList = styled.ul`
  display: flex;
  align-items: center;
`
