import React from 'react'
import Menu from './Component/default/Menu'
import Container from './Pages/Container'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <ToastContainer autoClose={4000} position="top-right" />
         <div className="container-main">
            <Container/>
         </div>
    </BrowserRouter>
  )
}

export default App