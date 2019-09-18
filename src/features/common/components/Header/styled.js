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
  height: 44px;
  display: flex !important;
  align-items: center;
`

export const StyledMenu = styled(Menu)`
  .ant-layout-header {
    height: 44px;
    padding: 0 50px;
    line-height: 64px;
    background: #001529;
}
`
