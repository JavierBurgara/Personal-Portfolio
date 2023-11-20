import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/header'
import {ContactMe} from './components/ContactMe/ContactMe'
import {Projects} from './components/Projects/Projects'
import {Resume} from './components/Resume/Resume'
import {Skills} from './components/Skills/Skills'

function App() {
  return (
    <div className='body'>  
    <div className="background"></div>
    <div className="content">      
      <Header/>
      <AboutMe/>
      <Resume/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
      </div>
    
    </div>
  )
}

export default App
