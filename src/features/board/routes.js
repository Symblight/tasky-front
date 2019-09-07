import { lazy } from "react"

import { WaitingComponent } from "@lib/waiting"

import { View } from "./pages/view"

const Board = lazy(() =>
  import(/* webpackChunkName: "board-home" */ "./pages/board").then(
    ({ BoardPage }) => ({ default: BoardPage }),
  ),
)

export const boardRoutes = () => [
  {
    path: "/b/:idBoard",
    component: View,
    routes: [
      {
        path: "/b/:idBoard",
        exact: true,
        component: WaitingComponent(Board),
      },
    ],
  },
]
