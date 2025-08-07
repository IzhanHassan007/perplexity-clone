// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import 'primereact/resources/themes/saga-blue/theme.css';   // ya koi aur theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', position: 'relative' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
