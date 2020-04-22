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
console.log(store.getState());


store.dispatch(addexpence({description:"water bill",amount:500,createdAt:10000}));

store.dispatch(addexpence({description:"gas bill",amount:1500,createdAt:1000}));
store.dispatch(addexpence({description:"rent",amount:2500,createdAt:5000}));

//store.dispatch(setTextFilter("bill"));
const arr=getVisibleExpence(store.getState().expences,store.getState().filters);
console.log(arr);

const x=()=>{
    return (
        <Provider store={store}>
        <AppRouter/>
        </Provider>
    )
}

ReactDOM.render(x(),document.getElementById("idone"));