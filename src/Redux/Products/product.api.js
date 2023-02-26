import axios from "axios";
export const getProdata= async(getProductsParam)=>{

    try {
        let res = await axios.get(`https://good-blue-giraffe-boot.cyclic.app/products`, getProductsParam)
        
        return res.data;
    } catch (error) {
        return error;
    }
}