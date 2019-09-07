import { lazy } from "react"
import { redirectTo } from "@lib/routing"

import { WaitingComponent } from "@lib/waiting"

import { View } from "./pages/view"

const Boards = lazy(() =>
  import(/* webpackChunkName: "boards-all" */ "./pages/boards").then(
    ({ BoardsPage }) => ({ default: BoardsPage }),
  ),
)

const Board = lazy(() =>
  import(/* webpackChunkName: "boards-board" */ "./pages/board").then(
    ({ BoardPage }) => ({ default: BoardPage }),
  ),
)

export const boardsRoutes = () => [
  {
    path: "/:nickname",
    component: View,
    routes: [
      {
        path: "/:username/boards",
        exact: true,
        component: WaitingComponent(Boards),
      },
    ],
  },
]
