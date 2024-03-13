import "aos/dist/aos.css";
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>

    </>
  )
}

export default App
