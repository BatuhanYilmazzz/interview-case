import { takeEvery, put } from 'redux-saga/effects';
import { services } from 'services/services';
import * as actionTypes from '../types';
import {
  fetchProductsSuccess,
  fetchProductsFail,
  fetchCompaniesSuccess,
  fetchCompaniesFail,
  setTotalPages,
  setTageStateFail,
  setTageStateSuccess
} from 'store/actions/index';

export function* fetchProductsSaga(action) {
  try {
    const response = yield services.getProducts(action.payload);
    yield put(fetchProductsSuccess(response.data));
    yield put(setTotalPages(Math.ceil(response.data.length / 16)));
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

export function* setTageStateSaga() {
  try {
    const response = yield services.getProducts();
    if (response) {
      const sortTags = () => {
        let tags = [];
        response.data.forEach((item) => {
          item.tags.forEach((i) => {
            tags.push(i);
          });
        });

        // eslint-disable-next-line no-undef
        const newTags = Array.from(new Set(tags));

        return newTags;
      };
      console.log(sortTags());
      yield put(setTageStateSuccess(sortTags()));
    }
  } catch (error) {
    yield put(setTageStateFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga);
  yield takeEvery(actionTypes.FETCH_COMPANIES, fetchCompaniesSaga);
  yield takeEvery(actionTypes.SET_TAG_STATE, setTageStateSaga);
}
