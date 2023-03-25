import React from 'react';
import Header from './Header';
import {Toaster} from 'react-hot-toast'
import { Outlet } from 'react-router-dom';
import Todos from '../Todos';
import TodoDetailPage from '../../pages/TodoDetailPage';

const Layout = () => {
  return (
    <>
      <Header />

      <Toaster position='top-center'/>
    
      <main className='h-[calc(100vh-64px)] bg-slate-900 text-white p-5'>
        <Outlet />

        </main>

      
    </>
  );
}

export default Layout;
