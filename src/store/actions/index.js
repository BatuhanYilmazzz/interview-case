import * as actionTypes from '../types';

export const fetchProducts = (params) => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    payload: params
  };
};
export const fetchProductsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data
  };
};
export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    payload: error
  };
};

export const fetchCompanies = () => {
  return {
    type: actionTypes.FETCH_COMPANIES
  };
};
export const fetchCompaniesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COMPANIES_SUCCESS,
    payload: data
  };
};
export const fetchCompaniesFail = (error) => {
  return {
    type: actionTypes.FETCH_COMPANIES_FAIL,
    payload: error
  };
};

export const setTotalPages = (data) => {
  return {
    type: actionTypes.SET_PRODUCTS_TOTAL_ITEM_COUNT,
    payload: data
  };
};

export const setTageState = () => {
  return {
    type: actionTypes.SET_TAG_STATE
  };
};

export const setTageStateFail = (error) => {
  return {
    type: actionTypes.SET_TAG_STATE_FAIL,
    payload: error
  };
};
export const setTageStateSuccess = (data) => {
  return {
    type: actionTypes.SET_TAG_STATE_SUCCESS,
    payload: data
  };
};

export const addItemBasket = (data) => {
  return {
    type: actionTypes.ADD_ITEM_BASKET,
    payload: data
  };
};
