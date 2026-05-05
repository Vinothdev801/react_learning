//import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BankAccounts } from './components/list/Banks'
import { UserProfile } from './components/profile/profile'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header />
    <UserProfile />
    <Footer /> */}
    <BankAccounts />
    </>
  )
}

export default App
