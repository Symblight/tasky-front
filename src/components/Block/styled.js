import styled, { css, keyframes } from "styled-components"

const styles = css`
  box-shadow: 0 1px 1px 1px rgba(10, 16, 34, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 16px 32px 0 rgba(10, 16, 34, 0.2), 0 0 0 transparent;
    transform: translateY(-5px) translateZ(0);
  }
`

const DELAY_MS = 80

const showContent = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(15px);
  }
`

const isAddBlock = ({ addable }) => !addable && styles
const CountDelay = ({ index }) => `${index * DELAY_MS}ms`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 26px;
  border-radius: 6px;
  background-color: #ffffff;

  min-width: 180px;
  width: 100%;

  ${isAddBlock}

  animation-delay: ${CountDelay};
  animation-duration: .4s;
  transform-origin: top;
  animation-name: ${showContent};
  animation-fill-mode: backwards;
`
