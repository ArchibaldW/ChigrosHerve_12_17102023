import { Route, Routes } from 'react-router-dom'

import ROUTES from './routes.js'

import Home from '../home/index.jsx'
import UnderConstruction from '../underConstruction'
import PageNotFound from '../pageNotFound'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.profile} element={<UnderConstruction />} />
      <Route path={ROUTES.settings} element={<UnderConstruction />} />
      <Route path={ROUTES.community} element={<UnderConstruction />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
