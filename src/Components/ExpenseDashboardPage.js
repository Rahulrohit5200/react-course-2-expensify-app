import ExpenceList from "./Expencelist"
import React from 'react';
import ExpenceListFilters from"../Components/ExpenceListFilters"
const ExpenseDashboardPage=()=>{
    return(
           <div>
           This is your dashboard page.
           <ExpenceListFilters/>
           <ExpenceList/>
           
           </div>
    );
   }
   export {ExpenseDashboardPage};