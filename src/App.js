import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import Pages from './components/pages'
// import { Widget } from 'react-chat-widget'

function App() {




  return (
    <div>
      <Pages>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/messages">Messages</NavLink><br />
      </Pages>
    </div>
  );
}

export default App;
