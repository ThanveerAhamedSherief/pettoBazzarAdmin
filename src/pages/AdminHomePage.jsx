import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const logout = () => {
    localStorage.removeItem("isLoggedSuccess");
    window.location.reload();
    setIsLoggedin(false);
};
  return (
   
   <div className="flex">
      <div
        className={`fixed inset-0 z-30 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`fixed min-h-full w-full  max-w-60 z-40 inset-y-0 left-0 w-64 bg-indigo-600 text-white overflow-y-auto transform transition-transform lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold">PettoBazzar</h1>
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-4 py-2">
        <Link to="/adminHomePage/about" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/adminHomePage/getPosts" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Posts</Link>
          <button className="bg-transparent hover:bg-indigo-500  font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded" onClick={logout}>
  Logout</button>
          {/* <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">About</a>
         <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Services</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Contact</a> */}
        </nav>
      </div>

      <button className="lg:hidden fixed z-50 bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full" onClick={() => setIsOpen(true)}>
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  );
};

export default AdminHomePage;