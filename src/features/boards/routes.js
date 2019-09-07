import { lazy } from "react"

import { WaitingComponent } from "@lib/waiting"

const Boards = lazy(() =>
  import(/* webpackChunkName: "boards-all" */ "./pages/boards").then(
    ({ BoardsPage }) => ({ default: BoardsPage }),
  ),
)

export const boardsRoutes = () => [
  {
    path: "/:username/boards",
    exact: true,
    component: WaitingComponent(Boards),
  },
]
