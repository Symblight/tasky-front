import styled from "styled-components"

import { Layout } from "antd"

const { Sider } = Layout

export const Wrapper = styled.div``

export const StyledAside = styled(Sider)`
  background-color: transparent;
  margin-right: 24px;
`
export const StyledLayout = styled(Layout)`
  height: 100%;
  padding-top: 16px;
`
export const Posts = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px 38px 0px 38px;
  height: 100%;
`
