import {Provider} from "react-redux"; 
import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configurestore from "./store/configureStore";
import {NavLink,BrowserRouter,Route,Switch, Link} from "react-router-dom";
import {AppRouter} from "./routers/AppRouter";
import {addexpence} from "./actions/expences";
//import expenceReducer from "./reducers/expences";//noneed it will automatically go
import getVisibleExpence from "./selector/expences";
import { setTextFilter } from './actions/filters';


const store=configurestore();//if we use some other name for store then we have to change in provider also {name of store} at down
console.log("hello");

const x=()=>{
    return (
        <Provider store={store}>
        <AppRouter/>
        </Provider>
    )
}

ReactDOM.render(x(),document.getElementById("idone"));