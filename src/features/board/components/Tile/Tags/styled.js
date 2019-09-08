import styled from "styled-components"

import { Tag } from "../../Tag"

export const Wrapper = styled.div`
  display: flex;
`

export const StyledTag = styled(Tag)`
  display: flex;
  align-items: center;
  color: #fff;
  &:not(:last-child) {
    margin-right: 4px;
  }
`
