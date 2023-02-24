import { async } from "@firebase/util";
import axios from "axios";

export const adminDataAPI = async () => {
  try {
    let res = await axios("http://localhost:8080/products");

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postAdminDataAPi = async (payload) => {
  try {
    let res = await axios.post("http://localhost:8080/products", payload);
    return res;
  } catch (err) {
    console.log(err);
  }
};
