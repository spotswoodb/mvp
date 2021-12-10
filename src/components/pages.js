import React from 'react';
import PlayerContainer from './players/playerContainer';
import Home from './home';
import { Routes, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/players' element={<PlayerContainer />} />
       </Routes>
    )
}