import React from 'react';
import PlayerContainer from './players/playerContainer';
import Home from './home';
import { Switch, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Switch>
            <Route path='/' component={routerProps => <Home routerProps={routerProps} />} />
            <Route path='/players' component={routerProps => <PlayerContainer routerProps={routerProps} />} />
       </Switch>
    )
}