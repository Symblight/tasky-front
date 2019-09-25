import { lazy } from "react"

import { WaitingComponent } from "@lib/waiting"

const Join = lazy(() =>
  import(/* webpackChunkName: "singup" */ "./pages/register").then(
    ({ SignUpPage }) => ({ default: SignUpPage }),
  ),
)

export const signUpRoutes = () => [
  {
    path: "/signup",
    component: WaitingComponent(Join),
    exact: true,
  },
]
