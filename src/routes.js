import React from 'react'
// const Login = React.lazy(() => import('./views/examples/pages/login/Login'))
// const Register = React.lazy(() => import('./views/examples/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/examples/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/examples/pages/page500/Page500'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Notes = React.lazy(() => import('./views/notes/Notes'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/notes', name: 'Notes', component: Notes },
]
export default routes
