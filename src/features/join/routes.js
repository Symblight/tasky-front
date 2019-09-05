import { lazy } from "react"

import { WaitingComponent } from "@lib/waiting"

const Join = lazy(() =>
  import(/* webpackChunkName: "join" */ "./pages/join").then(
    ({ JoinPage }) => ({ default: JoinPage }),
  ),
)

export const joinRoutes = () => [
  {
    path: "/login",
    component: WaitingComponent(Join),
    exact: true,
  },
]
