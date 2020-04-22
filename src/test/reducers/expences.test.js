import expencesReducer from "../../reducers/expences";
import moment from "moment";
import A from "../fixture/expences";
test("should set the default state",()=>{
    const x=expencesReducer(undefined,{type:"@@INIT"});
    expect(x).toEqual([]);
})


test("should remove expence by id",()=>{
    const x=expencesReducer(A,{type:"removeExpence",id:A[1].id});
    expect(x).toEqual([A[0],A[2]]);
})

test("should not remove expence by id not found",()=>{
    const x=expencesReducer(A,{type:"removeExpence",id:-1});
    expect(x).toEqual(A);
})


test("should add expence ",()=>{
    const y={id:"6",
    note:"",
    description:"mill",
    amount:10000,
    createdAt:moment(0).add(4,"years").valueOf()};
    const x=expencesReducer(A,{type:"addExpence",expences:y});
    expect(x).toEqual([...A,y]);
})

test("should edit an expence ",()=>{
    const x=expencesReducer(A,{type:"editExpence",id:A[1].id,amount:50000});
    expect(x).toEqual([A[0],{...A[1],amount:50000},A[2]]);
})
test("should not edit an expence when id not match",()=>{
    const x=expencesReducer(A,{type:"editExpence",id:-1,amount:50000});
    expect(x).toEqual(A);
})