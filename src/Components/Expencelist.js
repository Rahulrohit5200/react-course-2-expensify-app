import React from "react";
import {connect} from "react-redux";
import AllExpences from "./AllExpences";
import FilterExpences from "../selector/expences";
const Expencelist=(props)=>{
    return (
            <div>
                <h1>expences list</h1>
                <p>{props.exp.length}</p>
                {props.exp.map((i)=>{
                    return(<AllExpences expen={i}/>);
                })}
            </div>
    );
};

const ram=(state)=>{//return an object value pair
    return{
        exp:FilterExpences(state.expences,{...state.filters})        
    };
}



const connectedExpenceList=connect(ram)(Expencelist);//hoc actually little diffrent bcoz here connect is a function so it 
                                                  //it takes fn as an argument that function says what are the properties
                                                  //ExpenceList want from store
export default connectedExpenceList;