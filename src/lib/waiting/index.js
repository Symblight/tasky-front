import React, { Suspense } from "react"

import { Spin } from "antd"
import styled from "styled-components"

const Loading = () => (
  <Wrapper>
    <Spin />
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
