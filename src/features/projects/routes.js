import { lazy } from "react"
import { redirectTo } from "@lib/routing"

import { WaitingComponent } from "@lib/waiting"

import { View } from "./pages/view"

const Projects = lazy(() =>
  import(/* webpackChunkName: "projects-all" */ "./pages/projects").then(
    ({ ProjectsPage }) => ({ default: ProjectsPage }),
  ),
)

const Project = lazy(() =>
  import(/* webpackChunkName: "projects-project" */ "./pages/project").then(
    ({ ProjectPage }) => ({ default: ProjectPage }),
  ),
)

export const projectsRoutes = () => [
  {
    path: "/projects",
    component: View,
    routes: [
      {
        path: "/projects",
        exact: true,
        component: WaitingComponent(Projects),
      },
      {
        path: "/projects/:idProject",
        exact: true,
        component: WaitingComponent(Project),
      },
    ],
  },
]
