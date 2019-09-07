import { lazy } from "react"

import { WaitingComponent } from "@lib/waiting"

const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ "./pages/home").then(
    ({ HomePage }) => ({ default: HomePage }),
  ),
)

export const homeRoutes = () => [
  {
    path: "/",
    component: WaitingComponent(Home),
    exact: true,
  },
]
