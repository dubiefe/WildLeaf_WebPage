import { useState } from 'react'
import wildleaf_logo from "./assets/wildleaf_logo.png"
import './App.css'
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={wildleaf_logo} alt="wildleaf_logo" />
        <Footer></Footer>
    </>
  )
}

export default App
