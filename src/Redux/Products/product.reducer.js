import * as types from "./product.type";

const init={

    isLoading:false,
    Products:[],
    isError:false
}

export const reducer = (state=init,{type,payload})=>{
 switch(type){
    case types.PRODUCTS_LOAD:
        return {...state,isLoading:true}
    case types.PRODUCTS_SUCCESS:
        return {...state,isLoading:false,Products:payload}
    case types.PRODUCTS_ERROR:
        return {...state,isError:true,isLoading:false}
    default:
        return state;
 }

}
