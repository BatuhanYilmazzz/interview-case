import produce from 'immer';
import * as actionTypes from '../types';

const initialState = {
  productsData: [],
  companiesData: [],
  error: null,
  loading: true,
  basket: [],
  totalPages: null
};

const storeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.FETCH_COMPANIES:
        draft.loading = true;
        break;
      case actionTypes.FETCH_COMPANIES_SUCCESS:
        draft.loading = false;
        draft.companiesData = action.payload;
        break;
      case actionTypes.FETCH_COMPANIES_FAIL:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case actionTypes.FETCH_PRODUCTS:
        draft.loading = true;
        break;
      case actionTypes.FETCH_PRODUCTS_SUCCESS:
        draft.loading = false;
        draft.productsData = action.payload;
        break;
      case actionTypes.FETCH_PRODUCTS_FAIL:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case actionTypes.SET_PRODUCTS_TOTAL_ITEM_COUNT:
        draft.totalPages = action.payload;
        break;
      default:
        break;
    }
  });

export default storeReducer;
