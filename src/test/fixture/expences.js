import moment from "moment";

export default [   {id:"1",
            note:"",
            description:"gas",
            amount:450,
            createdAt:0},
            {id:"2",
            note:"",
            description:"gallary",
            amount:4500,
            createdAt:moment(0).add(4,"days").valueOf()},
            {id:"3",
            note:"",
            description:"credit",
            amount:2500,
            createdAt:moment(0).subtract(4,"days").valueOf()}];
