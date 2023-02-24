import { async } from "@firebase/util";
import { adminDataAPI, postAdminDataAPi } from "./admin.api";
import {
  ADMIN_DATA_ERROR,
  ADMIN_DATA_LOADING,
  ADMIN_DATA_SUCCESS,
  POST_ADMIN_DATA_ERROR,
  POST_ADMIN_DATA_SUCCESS,
  POST_ADMIN_DATA_LOADING,
} from "./admin.type";

export const getAdminData = () => async (dispatch) => {
  dispatch({ type: ADMIN_DATA_LOADING });

  try {
    let data = await adminDataAPI();
    if (data) {
      dispatch({ type: ADMIN_DATA_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: ADMIN_DATA_ERROR });
  }
};

export const postAdminData = (payload) => async (dispatch) => {
  dispatch({ type: POST_ADMIN_DATA_LOADING });
  try {
    let data = await postAdminDataAPi(payload);
    if (data) {
      dispatch({ type: POST_ADMIN_DATA_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: ADMIN_DATA_ERROR });
  }
};
