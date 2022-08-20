import {loginReducer} from "./Login/reducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore(
    {
        reducer:{
            login:loginReducer
        }
    }
);