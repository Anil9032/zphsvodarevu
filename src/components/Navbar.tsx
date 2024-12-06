import React from 'react';
import { NavLink } from 'react-router-dom';
import { School } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">ZPHS Vodarevu</h1>
              <p className="text-xs">Government School - All Free</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <NavLink to="/" className={({ isActive }) => 
              `px-3 py-2 rounded-md ${isActive ? 'bg-blue-900' : 'hover:bg-blue-700'}`
            }>
              Home
            </NavLink>
            <NavLink to="/admission" className={({ isActive }) => 
              `px-3 py-2 rounded-md ${isActive ? 'bg-blue-900' : 'hover:bg-blue-700'}`
            }>
              Admission
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => 
              `px-3 py-2 rounded-md ${isActive ? 'bg-blue-900' : 'hover:bg-blue-700'}`
            }>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `px-3 py-2 rounded-md ${isActive ? 'bg-blue-900' : 'hover:bg-blue-700'}`
            }>
              Contact
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => 
              `px-3 py-2 rounded-md ${isActive ? 'bg-blue-900' : 'hover:bg-blue-700'}`
            }>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}