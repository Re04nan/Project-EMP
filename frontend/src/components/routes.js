import React from 'react';
import Index from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Password from '../pages/Password';
import Settings from '../pages/Settings';
import Level from '../pages/Level';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Password" component={Password} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Level/:id/" component={Level} />
        </Switch>
    )
}

export default Routes;