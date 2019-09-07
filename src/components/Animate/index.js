import { css, keyframes } from "styled-components"

const DELAY_MS = 80

const showContent = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(15px);
  }
`

const CountDelay = ({ index }) => `${index * DELAY_MS}ms`

export const Animate = css`
  animation-delay: ${CountDelay};
  animation-duration: 0.4s;
  transform-origin: top;
  animation-name: ${showContent};
  animation-fill-mode: backwards;

  box-shadow: 0 1px 1px 1px rgba(10, 16, 34, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 16px 32px 0 rgba(10, 16, 34, 0.2), 0 0 0 transparent;
    transform: translateY(-5px) translateZ(0);
  }
`
