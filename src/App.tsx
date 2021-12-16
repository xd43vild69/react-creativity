import React from 'react';
import './App.css';
import CreativityManager from './components/CreativityManager';
import Feedback from './components/Feedback'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CREATIVITY <span>*2</span></h1>
      </header>
      <section>
        <CreativityManager />
      </section>
      <div className="container"></div>
      <footer className="feedback">
        <Feedback />
        <div>Footer</div>
      </footer>
    </div>
  );
}

export default App;
