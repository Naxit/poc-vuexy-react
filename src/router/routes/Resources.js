import { lazy } from 'react'

const ResourcesRoutes = [
  // Agents
  {
    path: '/resources/list',
    component: lazy(() => import('../../views/resources/list'))
  },
  {
    path: '/resources/sheet',
    component: lazy(() => import('../../views/resources/sheet'))
  }
]

export default ResourcesRoutes
