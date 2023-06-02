import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
      <Header />
      <main className='app__body'>
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}

export default App;
