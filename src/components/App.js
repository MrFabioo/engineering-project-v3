import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Map from './Map';
import './App.css';

export default function App() {
  return (
    <div className='overflow-x-hidden h-screen w-screen bg-gradient-to-tl from-green-400 to-indigo-900 '>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* SET DEFAULT ROUTE TO HOME */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/map' element={<Map />} />
            {/* <Route path='/page-1' element={<SiteOne />} /> */}
            {/* <Route path='/page-2' element={<SiteTwo />} /> */}
            <Route path='*' element={<Navigate to='/login' replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
