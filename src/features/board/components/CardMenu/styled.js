import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
`

export const ContextItem = styled.div`
  background-color: #00000087;

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
