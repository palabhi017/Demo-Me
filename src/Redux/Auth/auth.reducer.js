import * as types from "./auth.types";

const init={
    currentUser:{},
    
    isLoading:false,
    isAuth:false,
    users:[],
    isError:false
}

export const reducer = (state=init,{type,payload})=>{
 switch(type){
    case types.AUTH_LOAD:
        return {...state,isLoading:true}
    case types.AUTH_SUCCESS:
        return {...state,isLoading:false,isAuth:true,currentUser:payload}
    case types.POST_AUTH_SUCCESS:
            return {...state,isLoading:false,users:payload} 
    case types.AUTH_ERROR:
        return {...state,isError:true,isLoading:false}
    case types.AUTH_LOGOUT:
            return {...state,isAuth:false}
    case types.SET_CUR_NAME:
            return {...state,currentUserName:payload}
    default:
        return state;
 }

}
