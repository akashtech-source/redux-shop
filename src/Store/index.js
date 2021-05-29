import {createStore, combineReducers} from "redux"
import ProductReducer from "./Reducers/ProductsReducers"

const root = combineReducers ({
    ProductReducer
});
const store = createStore(root);
export default store;