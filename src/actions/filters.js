export const setTextFilter=(x="")=>{
    return{
        type:"setTextFilter",
        text:x        
    }
}

export const sortbydate=()=>{
    return{
        type:"sortByDate",
        sort:"Date"        
    }
}

export const sortbyamount=()=>{
    return{
        type:"sortByAmount",
        sort:"Amount"        
    }
}
export const setStartDate=(stdate=undefined)=>{
    return{
        type:"setStartDate",
        sdate:stdate
    }
}
export const setEndDate=(endate=undefined)=>{
    return{
        type:"setEndDate",
        edate:endate
    }
}