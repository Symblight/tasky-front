import React from "react"
import { renderRoutes } from "react-router-config"

import { NotFound, Root } from "@features/common"
import { projectsRoutes } from "@features/projects"
import { joinRoutes } from "@features/join"

const routes = [
  {
    path: "/",
    component: Root,
    routes: [...projectsRoutes(), ...joinRoutes(), { component: NotFound }],
  },
]

export const Routes = () => <>{renderRoutes(routes)}</>
