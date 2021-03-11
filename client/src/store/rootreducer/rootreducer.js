import {combineReducers} from "redux";

import ErrorReducer from "../feature/error/reducer"
import ProductReducer from "../feature/Product/reducer"
import ProductMovement from "../feature/ProductMovement/reducer"
import LocationReducer from "../feature/Location/reducer"

export default combineReducers({
    product: ProductReducer,
    error: ErrorReducer,
    productMovement: ProductMovement,
    location: LocationReducer
})