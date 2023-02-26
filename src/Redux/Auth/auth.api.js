import axios from "axios";
export const getAuth= async(UserData)=>{

    try {
        let res = await axios.post(`https://good-blue-giraffe-boot.cyclic.app/login`,UserData)
      
        return res.data;
    } catch (error) {
        return error;
    }
}