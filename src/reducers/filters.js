import moment from "moment";
const filtersReducerDefaultState={text:"",sortby:"Date",startdate:moment().startOf("month"),enddate:moment().endOf("month")};
export default(state=filtersReducerDefaultState,action)=>{
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

