import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
