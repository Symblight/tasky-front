import React, { Suspense } from "react"
import { Spin, Icon } from "antd"
import styled from "styled-components"

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

const Loading = () => (
  <Wrapper>
    <Spin indicator={antIcon} />
  </Wrapper>
)

export const WaitingComponent = (Component) => (props) => (
  <Suspense fallback={<Loading {...props} />}>
    <Component {...props} />
  </Suspense>
)

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`
