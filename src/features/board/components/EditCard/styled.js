import styled from "styled-components"

const isEditActive = ({ editable }) =>
  editable
    ? `
  position: fixed;
  width: 230px;
  z-index: 20;
  top: ${editable.top}px;
  left: ${editable.left}px;
`
    : `position: relative;`

export const FooterEdit = styled.div`
  margin-top: 8px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;

  ${isEditActive}
`
