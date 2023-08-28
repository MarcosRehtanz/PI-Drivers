import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Form } from './pages/Form/Form'
import { Nav } from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/home' element={ <Home/> }/>
        <Route path='/form' element={ <Form/> } >
        </Route>
        <Route path='/drivers' element={ <h1>DRIVERS</h1> }/>
      </Routes>
    </>
  )
}

export default App
