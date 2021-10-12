import { lazy } from 'react'

const SitesRoutes = [
  // Sites
  {
    path: '/sites/list',
    component: lazy(() => import('../../views/sites/list'))
  },
  {
    path: '/sites/planning',
    component: lazy(() => import('../../views/sites/planning'))
  }
]

export default SitesRoutes
