import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import BreadReducer from "./reducers/breads.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import OrderReducer from "./reducers/order.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));