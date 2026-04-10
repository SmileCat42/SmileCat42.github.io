import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Journey from './component/Journey' // หน้าใหม่ที่คุณสร้าง

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  const MainContent = () => (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  )

  return (
    <Router>
      <div className={
        darkMode
          ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen transition-colors duration-500'
          : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen transition-colors duration-500'
      }>
        
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/journey" element={<Journey />} /> 
        </Routes>

      </div>
    </Router>
  )
}
export default App