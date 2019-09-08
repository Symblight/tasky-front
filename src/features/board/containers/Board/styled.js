import styled from "styled-components"
import { Layout } from "antd"

import { BoardWallpaper } from "@assets/images"

const { Content } = Layout

export const Wrapper = styled.div``

export const StyledContent = styled(Content)`
  background-image: url(${BoardWallpaper});
`
