import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './main/mainpage.jsx';
import Aboutme from './pages/aboutme.jsx';
import Game from './pages/game.jsx';
import Projects from './pages/projects.jsx';
import Render from './pages/renderpage.jsx';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import Pj1 from './pages/sidepages/project1.jsx'
import Pj2 from './pages/sidepages/project2.jsx'
import Pj3 from './pages/sidepages/project3.jsx'
import Pj4 from './pages/sidepages/project4.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/home" element={<Render> <Home /></Render>} />
        <Route path="/about" element={<Render> <Aboutme /></Render>} />
        <Route path="/game" element={<Render> <Game /></Render>} />
        <Route path="/contact" element={<Render> <Contact /></Render>} />
        <Route path="/projects" element={<Render> <Projects /></Render>} />
        <Route path="/projects/pj1" element={<Render>  <Pj1 /></Render>} />
        <Route path="/projects/pj2" element={<Render>  <Pj2 /> </Render>} />
        <Route path="/projects/pj3" element={<Render> <Pj3 /> </Render>} />
        <Route path="/projects/pj4" element={<Render> <Pj4 /></Render>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
