import React from 'react';
import {NavLink,BrowserRouter,Route,Switch, Link} from "react-router-dom";
const Notfound=()=>{
    return(
           <div>
           404! :NOT FOUND
           <Link to="/">go to home</Link>
           </div>
    );
   }
   export{Notfound};