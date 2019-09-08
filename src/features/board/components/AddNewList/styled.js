import styled from "styled-components"

import { Icon } from "antd"

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 6px;
  background-color: #ebecf0;
  width: 230px;
  min-width: 230px;

  &:hover {
    background-color: #efefef;
  }
`

export const ActionClose = styled(Icon)`
  cursor: pointer;
  margin-left: 8px;
`

export const WrapAction = styled.div`
  margin-top: 8px;

  user-select: none;
`

export const Action = styled.div`
  font-weight: 700;
  padding: 0px 8px 8px 8px;
  cursor: pointer;
  text-align: center;

  user-select: none;
`
