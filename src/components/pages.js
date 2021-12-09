import React from 'react';
import PlayerContainer from './players/playerContainer';
import { Switch, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Switch>
           <Route path='/players' component={routerProps => <PlayerContainer routerProps={routerProps} />} />
        {/* about us */}
       </Switch>
    )
}