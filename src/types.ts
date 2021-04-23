
/* Reducer interfaces */

import { GET_FINANCE_DATA_FAILURE, GET_FINANCE_DATA_REQUEST, GET_FINANCE_DATA_SUCCESS } from "./constants";

export interface DataObject {
  [key: string]: any;
}

export interface ErrorObject {
  [key: string]: any;
}

export interface ReducerState {
  data: DataObject | null;
  isLoading: boolean;
  error: ErrorObject | null;
}

/* Action interfaces */

export interface GetFinanceDataAction {
  type: typeof GET_FINANCE_DATA_REQUEST;
}

export interface GetFinanceDataSuccessAction {
  type: typeof GET_FINANCE_DATA_SUCCESS;
  response: DataObject;
}

export interface GetFinanceDataErrorAction {
  type: typeof GET_FINANCE_DATA_FAILURE;
  error: ErrorObject;
}

export type FetchActionTypes = GetFinanceDataAction | GetFinanceDataSuccessAction | GetFinanceDataErrorAction;