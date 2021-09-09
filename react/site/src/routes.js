import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Conteudo from './pages/conteudo';

export default function Routes() {
    return(

        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Conteudo} />
            </Switch>
        </BrowserRouter>
    
    )
};