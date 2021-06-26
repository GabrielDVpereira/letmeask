import { css, keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const translateY = keyframes`
   0% {
    transform: translateY(30px);
  }
  100% {
    opacity: translateY(0);
  }
`;

export const fadeAndTranslateAnimation = css`
    animation: ${fade} 0.2s ease-in, ${translateY} 0.2s ease-in;

`

export const fadeInAnimation = css`
  animation: ${fade} 0.3s ease-in;
`;

export const translateAnimation = css`
  animation: ${translateY} 0.2s ease-in;
`