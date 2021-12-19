import React from 'react';
import PlayerContainer from './players/PlayerContainer';
import PlayerHitsContainer from './Hits/PlayerHitsContainer'
import NewPlayerForm from './players/NewPlayerForm'
import Home from './home';
import { Routes, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='players' element={<PlayerContainer />}/>
            <Route path='players/:id/hits' element={<PlayerHitsContainer />} />
            <Route path="players/new" element={<NewPlayerForm />} />
       </Routes>
    )
}
