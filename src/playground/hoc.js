import React from "react";
import ReactDOM from "react-dom";


const Info=(props)=>(
    <div>
    <h1>INFO:</h1>
    <p>the info is:{props.info}</p>
    </div> 
);
const withAdminWarning=(Wrapped)=>{
   return(props)=>(
       <div>
        {props.isadmin?<p><strong>this is private information.</strong></p>:false}
        <Wrapped {...props}/>
        </div>
   ); 

}; 

const authInfo=(NewWrapped)=>{
    return(props)=>(
        <div>{
        props.isauthanticated?
        <NewWrapped {...props}/>
        :
        <p>please login</p>}
        </div>
    )
}
const Authanticatedinfo=authInfo(Info);
const Admininfo=withAdminWarning(Info);
// ReactDOM.render(<Admininfo info="take care" isadmin={true}/>,document.getElementById("idone"));
ReactDOM.render(<Authanticatedinfo isauthanticated={false} info="take care"/>,document.getElementById("idone"));
