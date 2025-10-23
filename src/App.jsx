import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/productCard'
import Prac from './components/prac'
import Test from './components/test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import HomePage from '../pages/homePage'
import AdminPage from '../pages/adminPage'
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Toaster 
        position="top-right"
        reverseOrder={false} 
        toastOptions={{
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
          className: '',
          style: {
            padding: '16px',
            color: 'white',
            duration: 3000
          },
        }}/>
      {/* <ProductCard name = "Laptop" image = "https://picsum.photos/id/1/200/300" price = "180000 Rs"/>
      <ProductCard name = "Phone" image = "https://picsum.photos/id/2/200/300" price = "89000 Rs"/>
      <ProductCard name = "Watch" image = "https://picsum.photos/id/3/200/300" price = "5500 Rs"/> */}
      {/* <Prac/> */}
      {/* <Test/> */}
      <Navbar/>
      <div className="w-full h-screen bg-primary text-secondary">
        <Routes path="/">
          <Route path='/' element={<HomePage/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/> {/* Added wildcard to match nested routes under /admin */}
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
