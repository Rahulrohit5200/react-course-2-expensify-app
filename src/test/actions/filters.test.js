import moment from "moment";
import {setTextFilter,sortbydate,sortbyamount,setEndDate,setStartDate} from"../../actions/filters";
//setstartdate
test("should return a setstartdate action object",()=>{
    const x=setStartDate(moment(0));
    expect(x).toEqual({
        type:"setStartDate",
        sdate:moment(0)
    })
})
//setenddate
test("should return a setenddate action object",()=>{
    const x=setEndDate(moment(1000));
    expect(x).toEqual({
        type:"setEndDate",
        edate:moment(1000)
    })
})
//settextfilter
test("should return a settextfilter action object",()=>{
    const x=setTextFilter("rent");
    expect(x).toEqual({
        type:"setTextFilter",
        text:"rent"
    })
})
//settextfilter
test("should return a settextfilter action object with default",()=>{
    const x=setTextFilter();
    expect(x).toEqual({
        type:"setTextFilter",
        text:""
    })
})

//sortbydate
test("should return a sortbydate action object",()=>{
    const x=sortbydate();
    expect(x).toEqual({
        type:"sortByDate",
        sort:"Date"
    })
})
//sortbyamount
test("should return a sortbyamount action object",()=>{
    const x=sortbyamount();
    expect(x).toEqual({
        type:"sortByAmount",
        sort:"Amount"
    })
})