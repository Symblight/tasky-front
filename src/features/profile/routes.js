import { lazy } from "react"

import { WaitingComponent } from "@lib/waiting"

const Profile = lazy(() =>
  import(/* webpackChunkName: "boards-all" */ "./pages/home").then(
    ({ HomePage }) => ({ default: HomePage }),
  ),
)

export const profileRoutes = () => [
  {
    path: "/p/:username",
    exact: true,
    component: WaitingComponent(Profile),
  },
]
