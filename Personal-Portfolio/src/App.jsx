import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/header'

function App() {
  return (
    <div className='body'>
     <Header/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default App
