import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import Header from "./components/Header"
import MainBanner from "./components/MainBanner"
import Footer from "./components/Footer"
import Section from "./components/Section"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <MainBanner />
      <Section />
      <Footer />
    </BrowserRouter>
  )
}

export default App
