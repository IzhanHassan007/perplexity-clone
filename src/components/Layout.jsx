// src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div className="content" style={{ flex: 1, backgroundColor: '#111', color: 'white', padding: '40px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
