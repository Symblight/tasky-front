import styled from "styled-components"

import { Tag } from "../../Tag"

const backgroundColor = ({ color }) => color

export const Wrapper = styled.div`
  display: flex;
`

export const StyledTag = styled(Tag)`
  display: block;
  margin: 0 4px 4px 0;
  height: 16px;
  line-height: 16px;
  padding: 0 8px;
  max-width: 198px;
  min-width: 40px;
  width: auto;

  float: left;

  border-radius: 4px;
  color: #fff;
  display: block;

  background-color: ${backgroundColor};
  &:not(:last-child) {
    margin-right: 4px;
  }
`
