import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Form } from './pages/Form/Form'
import { Detail } from './pages/Detail/Detail'
import { Edit } from './pages/Form/Edit'
import { Nav } from './components/Nav/Nav'
import { Landing } from './pages/Landing/Landing'
import { useDispatch } from 'react-redux'
import { getAllTeams } from './redux/actions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTeams())
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/home' element={
          <>
            <Nav />
            <Home />
          </>
        } />
        <Route path='/form' Component={Form} >
        </Route>
        <Route path='/drivers/:id' Component={Detail} />
        <Route path='/drivers/edit/:id' Component={Edit} />
      </Routes>
    </>
  )
}

export default App
