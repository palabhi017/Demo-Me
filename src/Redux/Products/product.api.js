import axios from "axios";
export const getProdata = async (getProductsParam) => {
  try {
    let res = await axios.get(
      `http://localhost:8080/products`,
      getProductsParam
    );

    return res.data;
  } catch (error) {
    return error;
  }
};
