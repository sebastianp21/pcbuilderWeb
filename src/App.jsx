import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Build from './pages/Build'
import './App.css'
import Products from './pages/Products'
import Cpu from './pages/p_products/Cpu'
import Moth from './pages/p_products/Moth'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/build" element= {<Build/>}/>
        <Route path="/products" element= {<Products/>}/>

        <Route path="/products/cpu" element= {<Cpu/>}/>
        <Route path="/products/moth" element= {<Moth/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
