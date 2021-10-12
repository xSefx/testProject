import styled from 'styled-components'

export const LoaderSVG = styled.svg`
  animation-name: loading;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(8, start);

  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
`
