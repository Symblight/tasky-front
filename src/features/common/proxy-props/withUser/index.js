import React from "react"

import { Spin } from "antd"
import { useUser } from "../../hooks"

export const withUser = (Component) => ({ ...props }) => {
  const user = useUser()

  if (user.loading && !user.authenticated) return <Spin />
  return <Component {...user} {...props} />
}
