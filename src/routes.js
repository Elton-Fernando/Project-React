
                   // VOU CRIAR ROTAS PARA OUTRAS PAGINAS !

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // estou resumindo o BrowserRouter para ROUTER

import Home from './Pages/Home'
import Users from './Pages/Users'

function Routes(){

    return(
      <Router>
        <Switch>                                             {/* o SWITCH melhora a performance, se ele acha de primeira a rota ele ja entra ao invez de olhar todas primeiro */}
        <Route exact path="/" component={Home} />            {/* o EXACT VAI PROCURAR A ROTA EXATA, o PATH="/" ELE BUSCA A ROTA PRINCIPAL, E O COMPONENTE={} VAI DIZER QUAL A ROTA PRINCIPAL */}
        <Route exact path="/usuarios" component={Users}  />  {/* o EXACT VAI PROCURAR A ROTA EXATA, o PATH='="/USUARIOS" VAI BUSCA A ROTA QUE CRIEI DE USUARIOS, E O COMPONENTE={} VAI DIZER QUAL A ROTA */}
        </Switch>
      </Router>
    )

}

export default Routes