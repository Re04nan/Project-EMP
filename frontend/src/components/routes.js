import React from 'react';
import Index from './App';
import Login from './Login';
import Cadastro from './Cadastro';
import AlterarSenha from './AlterarSenha';
import Ajustes from './Ajustes';
import Niveis from './Niveis';
import { Switch, Route} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/Login" component={Login}/>
            <Route path="/Cadastro" component={Cadastro}/>
            <Route path="/AlterarSenha" component={AlterarSenha} />
            <Route path="/Ajustes" component={Ajustes} />
            <Route path="/Niveis/:id/" component={Niveis} />
        </Switch>
    )
}

export default Routes;