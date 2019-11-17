import styled from "styled-components"

const isRightPrecent = ({ right }) => (!right ? "-240px" : "100%")

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${isRightPrecent};
  width: 240px;
`

export const ContextItem = styled.div`
  position: relative;
  background-color: #00000087;
  z-index: 90;

  margin: 0 0 4px 8px;
  padding: 6px 12px 6px 8px;
  text-decoration: none;
  transition: transform 85ms ease-in;

  border-radius: 4px;
  color: #fff;

  cursor: pointer;

  &:hover {
    transform: translateX(5px);
  }

  span {
    margin-left: 4px;
  }
`
