import React from 'react';
import {NavLink,BrowserRouter,Route,Switch, Link} from "react-router-dom";
import {ExpenseDashboardPage} from "./../Components/ExpenseDashboardPage";
import EditExpensePage from "./../Components/EditExpensePage";
import AddExpensePage from "./../Components/AddExpensePage";
import {HelpPage} from "./../Components/HelpPage";
import {Notfound} from "./../Components/Notfound";
import {Header} from "./../Components/Header";
   const AppRouter=()=>(//this is class(stateless function component)we cant use object
                        //now edit is a dynamic component
       <BrowserRouter>
       <div>
       <Header/>
       <Switch>
           <Route path="/" component={ExpenseDashboardPage} exact={true}/>
           <Route path="/create" component={AddExpensePage} />
           <Route path="/help" component={HelpPage} />
           <Route path="/edit/:id" component={EditExpensePage} />
           <Route component={Notfound}/>
       </Switch>
       </div>
       </BrowserRouter>
   )
   export {AppRouter};