import { BoardsPage } from "./pages/boards"

export const boardsRoutes = () => [
  {
    path: "/:username/boards",
    exact: true,
    component: BoardsPage,
  },
]
