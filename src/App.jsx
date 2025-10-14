import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductCard name = "Laptop" image = "https://picsum.photos/id/1/200/300" price = "180000 Rs"/>
     <ProductCard name = "Phone" image = "https://picsum.photos/id/2/200/300" price = "89000 Rs"/>
     <ProductCard name = "Watch" image = "https://picsum.photos/id/3/200/300" price = "5500 Rs"/>
    </>
  )
}

export default App
