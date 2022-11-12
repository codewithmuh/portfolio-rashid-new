import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home'

const MainRoutes = () => (
  <Routes>
    <Route  path="/" element={<Home/>} />
  </Routes>
)

export default MainRoutes