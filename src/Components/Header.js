import React from 'react';
import {NavLink,BrowserRouter,Route,Switch, Link} from "react-router-dom";      
      const Header=()=>{
        return(
               <header>
               <h1>EXPENSIFY</h1>
               <NavLink to="/" exact={true} activeClassName="is-active">go to home</NavLink>
               <NavLink to="/create" activeClassName="is-active">create</NavLink>
               <NavLink to="/help" activeClassName="is-active">help</NavLink>
               </header>
        );
       }
       export{Header};