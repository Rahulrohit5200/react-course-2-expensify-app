import React from "react"

 import moment from "moment";
 import { SingleDatePicker } from 'react-dates';
 import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component{//we used class based component bcoz we need to dispatch a complete
                                                        //expense that we have to store.
    state={
        description:this.props.defaultdata?this.props.defaultdata.description:"",
        amount:this.props.defaultdata?this.props.defaultdata.amount:"",
        createdAt:this.props.defaultdata?moment(this.props.defaultdata.createdAt):moment(),
        note:this.props.defaultdata?this.props.defaultdata.note:"",
        calendarfocused:false,
        error:false
    }
    
    desChange=(e)=>{
        const y=e.target.value;
        this.setState(()=>{
        return {description:y};
    })
    }
    
    amoChange=(e)=>{
        const y=e.target.value;
         if(!y||y.match(/^\d{1,}(\.\d{0,2})?$/))
         {
            this.setState(()=>{
                return {amount:y};})
         }
    }
    
    noteChange=(e)=>{
        const y=e.target.value;
       
            this.setState(()=>{
                return {note:y};})
        
    }
    datechange=(x)=>{
        if(x)
        {
        this.setState(()=>{
            return {createdAt:x}
        })
        }
    };
    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarfocused: focused }));
      };

    ram=(e)=>{
        e.preventDefault();
        if(!this.state.description||!this.state.amount)
        {
            this.setState(()=>{
                return {error:true}
            })
        }
        else{
            this.setState(()=>{
                return {error:false}
            })
            this.props.funct({
                description:this.state.description,
                amount:this.state.amount,
                note:this.state.note,
                createdAt:this.state.createdAt
            });//props function called
        }
    }

    render=()=>{
        return(
            <div>
                <form onSubmit={this.ram}>
                {this.state.error&&<p>please fill details correctly!</p>}
                <input type="text" placeholder="enter description" value={this.state.description} onChange={this.desChange} 
                autoFocus  />
                <input type="text" placeholder="enter amount" value={this.state.amount} onChange={this.amoChange} />
                <input type="text" placeholder="enter note" value={this.state.note} onChange={this.noteChange} />
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.datechange}
                focused={this.state.calendarfocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                />
                
                
                <button>Add Expence</button>    
                </form>
            </div>
        )
    }
}


// const ram=(state)=>{
//     return{
//         expence:state.expences
//     }
// }