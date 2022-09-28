import { combineReducers } from "redux";
import carReducers from "./carReducers";

const reducers = combineReducers({
    carNameForDetails:carReducers
})

export default reducers