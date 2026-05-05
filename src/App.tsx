//import { useState } from 'react'
import './App.css'

import { BankAccounts } from './components/list/Banks'
import img from './assets/OIP.jpg'
import { Navbar } from './components/navbar/Navabar'
import { Footer } from './components/Footer'

function App() {
  const imgobj = {
    name: "Logo",
    path: img,
    width: "25px",
    height: "25px"
  }

  return (
    <>
    {/* <Header />
    <UserProfile />
    <Footer /> */}
    <Navbar img={imgobj} />
    <BankAccounts img={imgobj} />
    <Footer />
    </>
  )
}

export default App
