import filterReducer from "../../reducers/filters";
import moment from "moment";
test("should setup default filter value",()=>{
    const x=filterReducer(undefined,"@@INIT")//for default action pass action as "@@INIT"
    expect(x).toEqual({text:"",sortby:"Date",startdate:moment().startOf("month"),enddate:moment().endOf("month")})//just returned state value when case:default 

})

test("should setup sortby to amount",()=>{
    const x=filterReducer(undefined,{type:"sortByAmount",sort:"Amount"})//in action object pass sort:"amount" bcoz there i used sortby=action.sort
    expect(x).toEqual({text:"",sortby:"Amount",startdate:moment().startOf("month"),enddate:moment().endOf("month")}) 
})
test("should setup sortby to date",()=>{
    const y={
        text:"",sortby:"Amount",startdate:undefined,enddate:undefined
    }
    const x=filterReducer(y,{type:"sortByDate",sort:"Date"})
    expect(x).toEqual({text:"",sortby:"Date",startdate:undefined,enddate:undefined})
})
test("should setup textfilter",()=>{
    
    const x=filterReducer(undefined,{type:"setTextFilter",text:"g"})
    expect(x.text).toBe("g"); 
})
test("should setup startdate filter",()=>{
    
    const x=filterReducer(undefined,{type:"setStartDate",sdate:moment(0).add(3,"years")})
    expect(x.startdate).toEqual(moment(0).add(3,"years")); 
})
test("should setup enddate filter",()=>{
    
    const x=filterReducer(undefined,{type:"setEndDate",edate:moment(0).add(10,"years")})
    expect(x.enddate).toEqual(moment(0).add(10,"years")); 
})
