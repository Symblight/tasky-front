/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"

import _ from "lodash"

import { Header } from "../../components"

const { Header: HeaderLayout, Content } = Layout

export const withLayout = (type) => (Component) => ({ user, ...props }) => {
  if (type === "default") {
    return (
      <Layout>
        <HeaderLayout style={{ height: "44px" }}>
          <Header user={user} />
        </HeaderLayout>
        <Content>
          <Component {...props} />
        </Content>
      </Layout>
    )
  }

  if (type === "generic") {
    return (
      <Layout>
        <Content>
          <Component {...props} />
        </Content>
      </Layout>
    )
  }
  return <Component {...props} />
}
