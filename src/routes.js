import React from "react"
import { renderRoutes } from "react-router-config"

import { NotFound, Root } from "@features/common"
import { projectsRoutes } from "@features/projects"

const routes = [
  {
    path: "/",
    component: Root,
    routes: [...projectsRoutes(), { component: NotFound }],
  },
]

export const Routes = () => <>{renderRoutes(routes)}</>
