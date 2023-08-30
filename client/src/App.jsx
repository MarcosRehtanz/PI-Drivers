import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Form } from './pages/Form/Form'
import { Detail } from './pages/Detail/Detail'
import { Nav } from './components/Nav/Nav'
import { Landing } from './pages/Landing/Landing'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDrivers } from './redux/actions'


function App() {
  const [count, setCount] = useState(0)
  const allDrivers = useSelector(state => state.allDrivers)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllDrivers());
  }, [])

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/home' Component={Home} />
        <Route path='/form' Component={Form} >
        </Route>
        <Route path='/driver/:id' element={ <Detail/> }/>
      </Routes>
    </>
  )
}

export default App
