import React from "react"

import { HomeContainer, TitlePage } from "@tasky/components"
import { Profile } from "../containers"

export const HomePage = ({ ...props }) => {
  return (
    <HomeContainer>
      <TitlePage name="Профиль" />
      <Profile {...props} />
    </HomeContainer>
  )
}
