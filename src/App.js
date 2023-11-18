import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <TopBar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
