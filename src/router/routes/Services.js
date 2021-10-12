import { lazy } from 'react'

const ServicesRoutes = [
  // Sites
  {
    path: '/services',
    component: lazy(() => import('../../views/services'))
  }
]

export default ServicesRoutes
