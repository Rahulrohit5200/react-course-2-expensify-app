import {createStore} from "redux";

const fun=(state={count:0},action)=>
{
    switch(action.type)
    {
        case "INCREMENT":
            return {
                count:state.count+action.incrementBy
            }
        case "DECREMENT":
            return {
                count:state.count-action.decrementBy
            }   
        case "RESET":
            return{
                count:0
            } 
        case "SET":
            return{
               count:action.count
            }
        default:
            return state;
    }
}


const x=createStore(fun);

const reset=({type="RESET"}={})=>{
    return{
        type:type
    }
}
const set=({type,c}={})=>{
    return{
        type:type,
        count:c
    }
}

const incre=({type="INCREMENT",incrementBy=1}={})=>{//to change name of type see copy
    return{
        type:type,
        incrementBy:incrementBy
    }
}
const decre=({type="DECREMENT",decrementBy=1}={})=>{
    return{
        type:type,
        decrementBy:decrementBy
    }
}
const y= x.subscribe(()=>{
    return (console.log(x.getState()));
});

x.dispatch(set({type:"SET",c:45}));

x.dispatch(incre({type:"INCREMENT",incrementBy:10}));
x.dispatch(incre());
x.dispatch(reset({type:"RESET"}));
x.dispatch(decre({type:"DECREMENT",decrementBy:6}));


