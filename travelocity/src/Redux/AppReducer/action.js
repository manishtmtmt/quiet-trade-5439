import * as types from "./actionTypes";
import axios from "axios";

const getDataApi = () => (dispatch) => {
  dispatch({ type: types.GETDATA_REQUEST });
  axios
    .get("https://quiet-trade.herokuapp.com/data")
    .then((r) => dispatch({ type: types.GETDATA_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: types.GETDATA_FAILURE, payload: err }));
};

const getResortData = () => (dispatch) => {
  dispatch({ type: types.GET_RESORT_DATA_REQUEST });
  axios
    .get("https://quiet-trade.herokuapp.com/resorts")
    .then((res) =>
      dispatch({ type: types.GET_RESORT_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_RESORT_DATA_FAILURE, payload: err })
    );
};

export { getResortData, getDataApi};
