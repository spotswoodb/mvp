import React from 'react';
import './App.css';
import Pages from './components/pages'
import Navigation from './components/navigation'


function App() {
  return (
    <div className="App">
      <Navigation>
        <Pages />
      </Navigation>
    </div>
  );
}

export default App;
