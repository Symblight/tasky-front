import styled from "styled-components"

const isDraggingActive = ({ isDragging }) => (isDragging ? "grabbing" : "grab")

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  cursor: ${isDraggingActive};
`
