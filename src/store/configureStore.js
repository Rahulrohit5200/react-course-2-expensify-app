import {createStore,combineReducers} from "redux";
import expencesReducer from "../reducers/expences";//expencesReducers is default export in that file
import filtersReducer from "../reducers/filters";//expencesReducers is default export in that file
export default()=>{    //we are using store fn in some other fn so we can call store()
    const store=createStore(combineReducers({
        expences:expencesReducer,
        filters:filtersReducer    
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
return store;
}