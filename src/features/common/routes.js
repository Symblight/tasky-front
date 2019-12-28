import { LogoutPage } from "./pages/logout"
import { Redirect } from "./pages/redirect"

export const rootRoutes = () => [
  {
    path: "/logout",
    component: LogoutPage,
    exact: true,
  },
  {
    path: "/redirect/:token/board/:idboard",
    component: Redirect,
    exact: true,
  },
]
