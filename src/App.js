import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <main className='app__body'>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
