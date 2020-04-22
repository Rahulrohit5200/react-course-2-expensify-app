import  {removeExpence} from "../../actions/expences";
import  {editExpence} from "../../actions/expences";
import {addexpence} from "../../actions/expences";
test("should set up remove action object",()=>{
    const x=removeExpence({id:"123"});
    expect(x).toEqual({
        type:"removeExpence",
        id:"123"
    })
})
test("should set up edit action object",()=>{
    const x=editExpence("123",{amount:45});
    expect(x).toEqual({
        type:"editExpence",
            id:"123",
            amount:45
    })
})

test("should set up add action object when passed data",()=>{
    const y={description:"rent",amount:452,createdAt:1000,note:"add"}
    const x=addexpence(y);
    expect(x).toEqual({
        type:"addExpence",
        expences:{
            id:expect.any(String),
            ...y
        }
    })
})


test("should set up add action object default",()=>{
    const x=addexpence();
    expect(x).toEqual({
        type:"addExpence",
        expences:{
            id:expect.any(String),
            description:"",
                amount:0,
                note:"",
                createdAt:0
        }
    })
})


