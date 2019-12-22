import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

export const ButtonNav = styled.span`
  position: relative;
  background-color: #dadada;
  z-index: 90;

  margin: 0 0 4px 8px;
  padding: 6px 12px 6px 8px;
  text-decoration: none;
  transition: transform 85ms ease-in;

  border-radius: 4px;
  color: #464646;

  cursor: pointer;

  span {
    margin-left: 4px;
  }
`

export const Label = styled.span`
  font-weight: 700;
`
