import styled from "styled-components"

import { Layout } from "antd"

const { Sider, Content } = Layout

export const Wrapper = styled.div``

export const StyledAside = styled(Sider)`
  background-color: transparent;
  margin-right: 24px;
`
export const StyledLayout = styled(Layout)`
  height: 100%;
  padding-top: 16px;
`

export const StyledContent = styled(Content)`
  padding: 16px 50px;
`
