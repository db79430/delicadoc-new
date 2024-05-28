import {applyMiddleware, combineReducers, createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {infoPromoReducer} from "../reducers/info-users-reducer";
import {thunk} from "redux-thunk";



const rootReducer = combineReducers(
    {
        infoPromo: infoPromoReducer,
    }
)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

