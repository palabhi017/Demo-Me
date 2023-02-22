
export const getProdata= async()=>{

    try {
        let res = await fetch(`http://localhost:8080/products`)
        let data = await res.json()
        return data;
    } catch (error) {
        return error;
    }
}