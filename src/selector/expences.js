import moment from "moment";
export default(expences,{text ,sortby,startdate,enddate})=>
{
    return expences.filter((i)=>{
        const x=moment(i.createdAt);
        const p=startdate?startdate.isSameOrBefore(x,"day"):true; 
        const q=enddate?enddate.isSameOrAfter(x,"day"):true;
        const z=i.description.toLowerCase().includes(text.toLowerCase());
        return p&&q&&z;//if true then that part of array is removed
    }).sort((a,b)=>{
            if(sortby=="Date")
            return a.createdAt<b.createdAt?1:-1;
            if(sortby=="Amount")
            return a.amount>b.amount?-1:1;
    }
    )
}
 