




const expenceReducerDefaultState=[];//this is default state whent there is nothing in state and dispatch fn is called 
//first time.
export default (state=expenceReducerDefaultState,action)=>{//we are using default export
switch(action.type){
case "addExpence":
return state.concat(action.expences);
case "removeExpence":
return state.filter((expences) => {return expences.id!==action.id});
case "editExpence":
return state.map((i)=>{
if(action.id===i.id){
return {
...i,amount:action.amount
};}
else{
return i;
}    

})
default:return state;
}
}

