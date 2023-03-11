import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

const Header = () => {
  return (
    <header className=' w-full bg-slate-900  text-white flex items-center justify-center px-3 py-2' >
    
        <div>
        </div>
        <Link to={"/"}>
           Home 
        </Link>
    
    </header>
  );
}

export default Header;
