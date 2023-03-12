import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({chosenLink, handleClick}) {
    
    // function handleClick(event) {
    //     console.log(event.target.pathname)
    //     // const link = target.text.toLowerCase()
    //     // if (link === '#vanlife') {
    //     //     setChosenLink('');
    //     //     return;
    //     // }
    //     // setChosenLink(link);
    // }
    
    return (
        <nav>
            <h2 className='nav--home'><Link onClick={handleClick} to='/'>#Vanlife</Link></h2>
            <div className='nav--links'>
                <Link 
                    className={chosenLink === 'about' ? 'chosen' : ''} 
                    onClick={handleClick} 
                    to='/about'
                >About</Link>
                <Link 
                    className={chosenLink === 'vans' ? 'chosen' : ''} 
                    onClick={handleClick} 
                    to='/vans'
                >Vans</Link>
            </div>            
        </nav>
    )
}