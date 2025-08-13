import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import Navbar from './components/Navbar'

function App() {
  return (<>

    <Routes >
      
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  </>
  )
}

export default App
