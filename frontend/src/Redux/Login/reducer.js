import { LOGIN_SUCCESS } from "./action";

const initialState = {
    token: "",
    login:false,
};

export const loginReducer = (state=initialState, {type,payload}) =>{
switch(type){
     case LOGIN_SUCCESS:return {
        ...state,
         token:payload.token,
         login:payload.login
     }
    default: return state;
}
}