import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import { Layout } from "antd"

import { renderRoutes } from "react-router-config"

import { Header } from "../components"

const { Header: HeaderLayout, Content } = Layout

export const Root = ({ route }) => {
  return (
    <Layout>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <StyledContent>{renderRoutes(route && route.routes)}</StyledContent>
    </Layout>
  )
}

Root.propTypes = {
  route: PropTypes.object,
}

const StyledContent = styled(Content)`
  padding: 16px 50px;
`
