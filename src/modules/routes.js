import React from "react"
import { renderRoutes } from "react-router-config"

import { NotFound, rootRoutes } from "@features/common"
import { boardsRoutes } from "@features/boards"
import { joinRoutes } from "@features/join"
import { homeRoutes } from "@features/home"
import { boardRoutes } from "@features/board"
import { profileRoutes } from "@features/profile"

const routes = [
  ...homeRoutes(),
  ...boardsRoutes(),
  ...boardRoutes(),
  ...profileRoutes(),
  ...joinRoutes(),
  ...rootRoutes(),
  { component: NotFound },
]

export const Routes = () => <>{renderRoutes(routes)}</>
