import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {removeExpence} from "../actions/expences";
const AllExpences=(props)=>{
    return(
    <div>
    <Link to={`/edit/${props.expen.id}`}><h4>expence:{props.expen.description}</h4></Link>
    <p>amount:{props.expen.amount}</p>
       
        <button onClick={()=>{
            props.dispatch(removeExpence( { id: props.expen.id } ))
                      }}>remove</button> 
    <br></br>
    </div>
    )
}
// const AllExpences=({id,description,amount,dispatch})=>{
//     return(
//     <div>
//     <h4>expence:{description}</h4>
//     <p>amount:{amount}</p>

//     <button onClick={(props)=>{
//              dispatch(removeExpence({id}))
//          }}>remove</button>

//     <p>{id}</p>
//     <br></br>
//     </div>
//     )
// }
export default connect()(AllExpences);