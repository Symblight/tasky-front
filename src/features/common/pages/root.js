import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"

import { renderRoutes } from "react-router-config"

import { Header } from "../components"

const { Header: HeaderLayout, Content } = Layout

export const Root = ({ route }) => {
  return (
    <Layout>
      <HeaderLayout style={{ height: "44px" }}>
        <Header />
      </HeaderLayout>
      <Content>{renderRoutes(route && route.routes)}</Content>
    </Layout>
  )
}

Root.propTypes = {
  route: PropTypes.object,
}
