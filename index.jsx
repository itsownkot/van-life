import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';

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