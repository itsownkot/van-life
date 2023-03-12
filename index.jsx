import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  const [chosenLink, setChosenLink] = useState('');
  
  function handleClickLink({target}) {
    const link = target.pathname.slice(1);
    if (!link) {
        setChosenLink('');
        return;
    }
    setChosenLink(link);
  }
  
  return (
    <BrowserRouter>
      <Navbar chosenLink={chosenLink} handleClick={handleClickLink} />
      <Routes>
        <Route path='/' element={<Home handleClick={handleClickLink} />}/>
        <Route path='/about' element={<About handleClick={handleClickLink} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);