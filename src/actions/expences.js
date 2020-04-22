import uuid from "uuid";


export const addexpence=({description="",amount=0,note="",createdAt=0}={})=>{
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
export const removeExpence=({id="none"}={})=>{//for remove we only want type and which id to remove so we pass that only
                                    //as in addexpance we want to add expence so we passed expence
    return{
        type:"removeExpence",
        id:id
    }
}
export const editExpence=(id,{amount=0}={})=>{
        return {
            type:"editExpence",
            id:id,
            amount:amount
        }
}