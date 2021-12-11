import React from 'react';
import PlayerContainer from './players/PlayerContainer';
import HitsContainer from './Hits/HitsContainer'
import Home from './home';
import { Routes, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/players' element={<PlayerContainer />} />
            <Route path='/hits' element={<HitsContainer />} />
       </Routes>
    )
}