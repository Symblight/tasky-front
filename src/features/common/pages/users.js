import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"

import { renderRoutes } from "react-router-config"

import { useUser } from "@features/common"
import { Header } from "../components"

const { Header: HeaderLayout, Content } = Layout

export const Users = ({ route }) => {
  const { user } = useUser()
  return (
    <Layout>
      <HeaderLayout style={{ height: "44px" }}>
        <Header user={user} />
      </HeaderLayout>
      <Content>{renderRoutes(route && route.routes)}</Content>
    </Layout>
  )
}

Users.propTypes = {
  route: PropTypes.object,
}
