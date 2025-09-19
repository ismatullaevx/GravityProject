import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Home2 from './pages/Home2'

function App() {
  return (
    <div className='bg-[#141619]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home2' element={<Home2 />} />
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
