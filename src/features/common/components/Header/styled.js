import styled from "styled-components"

import { Menu } from "antd"

const { Item, SubMenu } = Menu

export const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`

export const StyledItem = styled(SubMenu)`
  float: right;
  height: 64px;
  display: flex !important;
  align-items: center;
`
