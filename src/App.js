import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import Pages from './components/pages'
// import { Widget } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css'

function App() {




  return (
    <div className="App">
      <Pages>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/messages">Messages</NavLink>
        {/* <Widget /> */}
      </Pages>
    </div>
  );
}

export default App;
