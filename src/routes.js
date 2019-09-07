import React from "react"
import { renderRoutes } from "react-router-config"

import { NotFound, Root } from "@features/common"
import { boardsRoutes } from "@features/boards"
import { joinRoutes } from "@features/join"
import { homeRoutes } from "@features/home"
import { boardRoutes } from "@features/board"

const routes = [
  {
    path: "/",
    component: Root,
    routes: [
      ...homeRoutes(),
      ...boardsRoutes(),
      ...boardRoutes(),
      ...joinRoutes(),
      { component: NotFound },
    ],
  },
]

export const Routes = () => <>{renderRoutes(routes)}</>
