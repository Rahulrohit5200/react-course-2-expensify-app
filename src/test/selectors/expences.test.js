import moment from "moment";
import selectExpences from "../../selector/expences";
import A from "../fixture/expences";
test("should filter by text",()=>{//filter by text so not used start and end dates
    const B={text:"g",sortby:"Date",startdate:undefined,enddate:undefined}
    const x=selectExpences(A,B);
    expect(x).toEqual([A[1],A[0]]);
})
test("should filter by startdate",()=>{//filter by startdate so not used  text and enddate
    const B={text:"",sortby:"Date",startdate:moment(0),enddate:undefined}
    const x=selectExpences(A,B);
    expect(x).toEqual([A[1],A[0]]);
})
test("should filter by enddate",()=>{//filter by startdate so not used  text and enddate
    const B={text:"",sortby:"Date",startdate:undefined,enddate:moment(0).add(2,"days")}
    const x=selectExpences(A,B);
    expect(x).toEqual([A[0],A[2]]);
})
test("should sort by date",()=>{//filter by nothing so not used  text and enddate
    const B={text:"",sortby:"Date",startdate:undefined,enddate:undefined}
    const x=selectExpences(A,B);
    expect(x).toEqual([A[1],A[0],A[2]]);
})

test("should sort by amount",()=>{//filter by nothing so not used  text and enddate
    const B={text:"",sortby:"Amount",startdate:undefined,enddate:undefined}
    const x=selectExpences(A,B);
    expect(x).toEqual([A[1],A[2],A[0]]);
})