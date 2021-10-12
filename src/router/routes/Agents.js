import { lazy } from 'react'

const AgentsRoutes = [
  // Agents
  {
    path: '/agents/list',
    component: lazy(() => import('../../views/agents/list'))
  },
  {
    path: '/agents/sheet',
    component: lazy(() => import('../../views/agents/sheet'))
  }
]

export default AgentsRoutes
