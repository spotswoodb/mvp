import React from 'react';
import MessageContainer from './messages/messageContainer';
import { Switch, Route } from 'react-router-dom';

export default function Pages() {
    return (
       <Switch>
           <Route path='/messages' component={routerProps => <MessageContainer routerProps={routerProps} />} />
       </Switch>
    )
}