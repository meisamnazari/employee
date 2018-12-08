import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER} from "../actions/types";

const Initial_State={email:'',
    password:'',
    user:'',
    error:'',
    loading:false}

export default (state=Initial_State,action)=>{
    switch (action.type){
        case EMAIL_CHANGED:
            return {...state,email:action.payload}
        case PASSWORD_CHANGED:
            return {...state,password:action.payload}
        case LOGIN_USER:
            return {...state,loading:true, error:''}
        case LOGIN_USER_SUCCESS:
                return {...state,...Initial_State,user:action.payload}
        case LOGIN_USER_FAIL:
            return {...state,error:'Authentication Failed',loading:false}
        default:
            return state;
    }
}
