import React from "react"
import { renderRoutes } from "react-router-config"

import { NotFound, Root } from "@features/common"

const routes = [
  {
    path: "/",
    component: Root,
    routes: [{ component: NotFound }],
  },
]

export const Routes = () => <>{renderRoutes(routes)}</>
