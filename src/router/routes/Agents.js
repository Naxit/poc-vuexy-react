import { lazy } from 'react'

const AgentsRoutes = [
  // Agents
  {
    path: '/resource/list',
    component: lazy(() => import('../../views/apps/resource/list'))
  }
]

export default AgentsRoutes
