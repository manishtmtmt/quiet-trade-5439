// import {
//   GETDATA_FAILURE,
//   GETDATA_REQUEST,
//   GETDATA_SUCCESS,
// } from "./actionTypes";
import * as types from "./actionTypes";
const initState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GETDATA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GETDATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case types.GETDATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_RESORT_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        isError: false,
      };
    }
    case types.GET_RESORT_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
        isError: false,
      };
    }

    case types.GET_RESORT_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
