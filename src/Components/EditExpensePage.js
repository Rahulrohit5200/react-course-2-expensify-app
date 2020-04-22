import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
const EditExpensePage=(props)=>{//props send by default when we create instance in parent file.
       return(
              <div>
              Edit your expense page. Id of this item is:{props.match.params.id}
              <ExpenseForm defaultdata={props.exp}/>
              </div>
       );
      }

const ram=(state,props)=>{
   return{
      exp:state.expences.find((i)=>{
         return i.id===props.match.params.id;
      })
   }
}
export default connect(ram)(EditExpensePage);