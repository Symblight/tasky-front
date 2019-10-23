import styled from "styled-components"
import { Layout } from "antd"

const { Content } = Layout

const backgroundColor = ({ background }) => background

export const Wrapper = styled.div`
  height: 100%;
  margin-right: 8px;
  margin-left: 8px;
`

export const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  background-color: ${backgroundColor};
`
