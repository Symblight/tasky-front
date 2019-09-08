import { lazy } from "react"

import { WaitingComponent } from "@lib/waiting"

import { View } from "./pages/view"

const Board = lazy(() =>
  import(/* webpackChunkName: "board-home" */ "./pages/board").then(
    ({ BoardPage }) => ({ default: BoardPage }),
  ),
)

const Card = lazy(() =>
  import(/* webpackChunkName: "board-card" */ "./pages/card").then(
    ({ CardPage }) => ({ default: CardPage }),
  ),
)

export const boardRoutes = () => [
  {
    path: "/b/:idBoard",
    component: View,
    routes: [
      {
        path: "/b/:idBoard",
        component: WaitingComponent(Board),
        routes: [
          {
            path: "/b/:idBoard/:idCard",
            component: WaitingComponent(Card),
            exact: true,
          },
        ],
      },
    ],
  },
]
