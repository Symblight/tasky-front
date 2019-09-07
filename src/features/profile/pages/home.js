import React from "react"

import { HomeContainer } from "@tasky/components"
import { Profile } from "../containers"

export const HomePage = ({ ...props }) => {
  return (
    <HomeContainer>
      <Profile {...props} />
    </HomeContainer>
  )
}
