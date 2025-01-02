// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../Pages/Dashboard'))





const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  
]

export default routes
