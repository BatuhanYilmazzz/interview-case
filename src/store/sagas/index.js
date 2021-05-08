import { takeEvery, put } from 'redux-saga/effects';
import { services } from 'services/services';
import * as actionTypes from '../types';
import {
  fetchProductsSuccess,
  fetchProductsFail,
  fetchCompaniesSuccess,
  fetchCompaniesFail,
  setTotalPages
} from 'store/actions/index';

export function* fetchProductsSaga(action) {
  try {
    const response = yield services.getProducts(action.payload);
    yield put(fetchProductsSuccess(response.data));
    yield put(setTotalPages(Math.round(response.data.length / 16 + 1)));
  } catch (error) {
    yield put(fetchProductsFail(error));
  }
}
export function* fetchCompaniesSaga() {
  try {
    const response = yield services.getCompanies();
    yield put(fetchCompaniesSuccess(response.data));
  } catch (error) {
    yield put(fetchCompaniesFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga);
  yield takeEvery(actionTypes.FETCH_COMPANIES, fetchCompaniesSaga);
}
