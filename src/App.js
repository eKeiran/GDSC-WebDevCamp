import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import SkillsPage from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
