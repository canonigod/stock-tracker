import {
  GET_FINANCE_DATA_REQUEST,
  GET_FINANCE_DATA_SUCCESS,
  GET_FINANCE_DATA_FAILURE,
} from './constants';
import { DataObject, ErrorObject, FetchActionTypes } from './types';


export function getFinanceDataRequest(): FetchActionTypes {
  return {
    type: GET_FINANCE_DATA_REQUEST,
  };
}

export function getFinanceDataSuccess(response: DataObject): FetchActionTypes {
  return {
    type: GET_FINANCE_DATA_SUCCESS,
    response,
  };
}

export function getFinanceDataFailure(error: ErrorObject): FetchActionTypes {
  return {
    type: GET_FINANCE_DATA_FAILURE,
    error,
  };
}
