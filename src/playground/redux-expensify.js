import{createStore,combineReducers} from "redux";
import uuid from "uuid";


const expenceReducerDefaultState=[];//this is default state whent there is nothing in state and dispatch fn is called 
                                    //first time.

const expencesReducer=(state=expenceReducerDefaultState,action)=>{
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








const filtersReducerDefaultState={text:"",sortby:"Date",startdate:undefined,enddate:undefined};

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case "setTextFilter":
            return {...state,text:action.text};
        case "sortByDate":
            return {...state,sortby:action.sort};
        case "sortByAmount":
            return {...state,sortby:action.sort};
        case "setStartDate":
            return{...state,startdate:action.sdate};        
        case "setEndDate":
            return{...state,enddate:action.edate};
        default:return state;
    }
}


const store=createStore(combineReducers({
    expences:expencesReducer,
    filters:filtersReducer    
})
)
const getVisibleExpence=(expences,{text ,sortby,startdate,enddate})=>
{
    return expences.filter((i)=>{
        const p=typeof startdate !=="number"||i.createdAt>=startdate;
        const q=typeof enddate !=="number"||i.createdAt<=enddate;
        const z=i.note.toLowerCase().includes(text.toLowerCase());
        return p&&q&&z;//if true then that part of array is removed
    }).sort((a,b)=>{
            if(sortby=="Date")
            return a.createdAt<b.createdAt?1:-1;
            if(sortby=="Amount")
            return a.amount<b.amount?1:-1;
    }
    )
}

store.subscribe(()=>{
    const state=store.getState();
    const x=getVisibleExpence(state.expences,state.filters)
    console.log(x);//getVisible Expence return an array to show
});



const addexpence=({description="",amount=0,note="",createdAt=0}={})=>{
    return{
        type:"addExpence",
        expences:{
                id:uuid(),
                description:description,
                amount:amount,
                note:note,
                createdAt:createdAt
        }
    }
}


//action object return for removeExpance
const removeExpence=({id="none"}={})=>{//for remove we only want type and which id to remove so we pass that only
                                    //as in addexpance we want to add expence so we passed expence
    return{
        type:"removeExpence",
        id:id
    }
}
const editExpence=(id,{amount=0}={})=>{
        return {
            type:"editExpence",
            id:id,
            amount:amount
        }
}
const setTextFilter=(x="")=>{
    return{
        type:"setTextFilter",
        text:x        
    }
}

const sortbydate=()=>{
    return{
        type:"sortByDate",
        sort:"Date"        
    }
}

const sortbyamount=()=>{
    return{
        type:"sortByAmount",
        sort:"Amount"        
    }
}
const setStartDate=(stdate=undefined)=>{
    return{
        type:"setStartDate",
        sdate:stdate
    }
}
const setEndDate=(endate=undefined)=>{
    return{
        type:"setEndDate",
        edate:endate
    }
}
const expenceone=store.dispatch(addexpence({description:"coffee",amount:"500",createdAt:"251",note:"hello dear pay rent to me"}));//addexpence will return an action object which will be
const expencetwo=store.dispatch(addexpence({description:"tea",amount:"900",createdAt:"120",note:"hello dear pay to me rent"}));//passed to dispatch means reducer and reducer will change
                                                                //state as per the action object;
store.dispatch(removeExpence({id:expenceone.expences.id}));   //coffee is deleted      
store.dispatch(editExpence(expencetwo.expences.id,{amount:500}));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());
store.dispatch(sortbydate());
store.dispatch(sortbyamount());
store.dispatch(sortbydate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));




// const demostate={
//     expences:[{
//         id:"ram",
//         description:"january rent",
//         note:"last rent",
//         amount:5400,
//         createdAt:0
//     }],
//     filters:{
//         text:"ram",
//         sortby:"amount",
//         startdate:undefined,
//         enddate:undefined
//     }
// }
