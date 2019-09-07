import styled from "styled-components"

const isAnimate = ({ animate }) => animate || null

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 6px;
  background-color: #ffffff;

  min-width: 180px;
  width: 100%;
  overflow: hidden;

  ${isAnimate}
`
