import React from 'react';                     //- IMPORTEI O REACT, (sempre componentes react começam com letra MAIUSCULA)
import ReactDOM from 'react-dom/client';       // 1- esses 3 ja vieram
import GlobalStyle from './globalStyle';
//import Home from './Pages/Home';             //- SE FOSSE SÓ UMA PAGINA EU IMPORTARIA ASSIM 
//import Users from './Pages/Users' 

import Routes from './routes';                 //- COMO É MAIS DE UMA ROTA(PAGINA), ESTOU IMPORTANDO AS ROTAS

const root = ReactDOM.createRoot(document.getElementById('root')); // 2- criei esta função para importar o APP
root.render(
 <> <Routes /> <GlobalStyle/> </>             // <> </> isto serve para englobar nossa importação, se fosse só o App não precisaria
);



