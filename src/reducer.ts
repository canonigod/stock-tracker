import { GET_FINANCE_DATA_FAILURE, GET_FINANCE_DATA_REQUEST, GET_FINANCE_DATA_SUCCESS } from "./constants";
import { FetchActionTypes, ReducerState } from "./types";


export const initialState: ReducerState = {
  data: null,
  isLoading: false,
  error: null,
};

export function reducer(state = initialState, action: FetchActionTypes): ReducerState {
  switch(action.type) {
    case GET_FINANCE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_FINANCE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.response
      }
    case GET_FINANCE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}
