import produce from 'immer';
import * as actionTypes from '../types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  productsData: [],
  companiesData: [],
  error: null,
  loading: false,
  basket: [],
  totalPages: null,
  filterState: {},
  tagsState: null
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
      case actionTypes.SET_TAG_STATE_SUCCESS:
        draft.tagsState = action.payload;
        draft.loading = false;
        break;
      case actionTypes.SET_TAG_STATE:
        draft.loading = true;
        break;
      case actionTypes.SET_TAG_STATE_FAIL:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case actionTypes.ADD_ITEM_BASKET:
        draft.basket = [...draft.basket, { ...action.payload, id: uuidv4() }];
        break;
      default:
        break;
    }
  });

export default storeReducer;
