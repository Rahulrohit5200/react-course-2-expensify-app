import React from "react";
import {connect} from "react-redux";
import {setTextFilter, setStartDate,setEndDate} from "../actions/filters";
import {sortbydate} from "../actions/filters";
import {sortbyamount} from "../actions/filters";
import {DateRangePicker} from "react-dates";
import moment from "moment";
class ExpenceListFilters extends React.Component
{
    state={
        calendarFocused:null
    }
    focuschange=(x)=>{
        this.setState(()=>({
            calendarFocused:x
        }))
    }
    datechange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
        
    }
    render()
    {
        return(
            <div>
            <input type="text" value={this.props.filter.text} onChange={(e)=>{
                    return(this.props.dispatch(setTextFilter(e.target.value)));
            }}>
            </input>
            <DateRangePicker
            startDate={this.props.filter.startdate}
            endDate={this.props.filter.enddate}
            onDatesChange={this.datechange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.focuschange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            showClearDates={true}
            />
            <select value={this.props.filter.sort} onChange={(e)=>{
                    if(e.target.value==="date")
                    {
                        this.props.dispatch(sortbydate());
                    }
                    else
                    {
                        this.props.dispatch(sortbyamount());
                    }
            }}>
            <option value="date">DATE</option>
            <option value="amount">AMOUNT</option>
            </select>
        
            </div>
            )
    }
}

const ram=(state)=>{
    return {
        filter:state.filters
    }
}

export default connect(ram)(ExpenceListFilters);