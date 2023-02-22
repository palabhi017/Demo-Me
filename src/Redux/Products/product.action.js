import { getProdata } from "./product.api"
import * as types from "./product.type"


export const getProducts = () => async(dispatch)=>{

dispatch({type:types.PRODUCTS_LOAD})
try {
    let data = await getProdata()
   
dispatch({type:types.PRODUCTS_SUCCESS,payload:data})
} catch (error) {
    dispatch({type:types.PRODUCTS_ERROR})
}
}

