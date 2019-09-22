import React from "react"

import { useUser } from "../../hooks"

export const withUser = (Component) => ({ ...props }) => {
  const user = useUser()

  if (user.loading && !user.authenticated) return <span>Loading</span>
  return <Component {...user} {...props} />
}
