import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux";
import {addexpence} from "../actions/expences"
// import { ProgressPlugin } from 'webpack';
   const AddExpensePage=(props)=>{
       return(
              <div>
              <h4>fill out the form to add new expences.</h4>
              <ExpenseForm funct={(exp)=>{
                         props.dispatch(addexpence(exp));
                         props.history.push("/");   
              }}/>
              </div>
       );
      }

const ram=(state)=>{
      return {
             expence:state.expences 
       };
}

export default connect(ram)(AddExpensePage);