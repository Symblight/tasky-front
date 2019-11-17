import styled from "styled-components"

const isDraggingBlock = ({ isDragging }) =>
  isDragging ? `rotate(5deg)` : "none"

export const Wrapper = styled.div`
  color: ${({ isDragging }) => (isDragging ? "green" : "none")};
  ${({ isDragging }) => (isDragging ? `transform: rotate(5deg);` : null)}
`
