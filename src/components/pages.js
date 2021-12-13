import React from 'react';
import PlayerContainer from './players/PlayerContainer';
import PlayerHitsContainer from './Hits/PlayerHitsContainer'
import Home from './home';
import { Routes, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/players' element={<PlayerContainer />}>
                <Route exact path=':id/hits' element={routerProps => <PlayerHitsContainer routerProps={routerProps} />} />
            </Route>
       </Routes>
    )
}