import styled from "styled-components";

export const LoaderStyled = styled.div`
  border: 1px solid red;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6);

  .ring {
    --uib-size: 150px;
    --uib-speed: 2s;
    --uib-color: ${(props) => props.theme.palette.primary};

    height: var(--uib-size);
    width: var(--uib-size);
    vertical-align: middle;
    transform-origin: center;
    animation: rotate var(--uib-speed) linear infinite;
  }

  .ring circle {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes stretch {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -124px;
    }
  }
`;
