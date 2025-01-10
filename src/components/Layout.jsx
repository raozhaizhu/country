// ./src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({ toggleDarkMode }) => {
    return (
        <>
            <header className='flex justify-between items-center px-[5rem] py-[1.5rem] shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
                <h1 className='text-[1.2rem] font-bold'>Where in the world?</h1>
                <div className='flex items-center gap-[1rem]' onClick={toggleDarkMode} role='button' tabIndex={0}>
                    <i className='far fa-moon'></i>
                    <p>Dark Mode</p>
                </div>
            </header>
            <main className='px-[5rem] py-[2rem]'>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;

