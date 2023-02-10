import styled from 'styled-components'

export const Spinner = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`
export const Loading = styled.div`
  @-webkit-keyframes sk-cubemove {
    25% {
      -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    }
    50% {
      -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
        scale(0.5);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes sk-cubemove {
    25% {
      transform: translateX(42px) rotate(-90deg) scale(0.5);
      -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    }
    50% {
      transform: translateX(42px) translateY(42px) rotate(-179deg);
      -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
    }
    50.1% {
      transform: translateX(42px) translateY(42px) rotate(-180deg);
      -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    }
    75% {
      transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
      -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
        scale(0.5);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

  background-color: ${({ theme }) => theme.colors.main.pokemon};
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
`

export const Loading2 = styled(Loading)`
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
`
