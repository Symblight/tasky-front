import styled from "styled-components"

import { Menu } from "antd"

const { Item } = Menu

export const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`

export const StyledItem = styled(Item)`
  float: right;
  height: 64px;
  display: flex !important;
  align-items: center;
`

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
`
