import styled from "styled-components"

const Color = ({ color }) => color

export const Wrapper = styled.div`
  padding: 4px;
  border-radius: 4px;
  background-color: ${Color};
  width: 18px;
  height: 18px;
`
