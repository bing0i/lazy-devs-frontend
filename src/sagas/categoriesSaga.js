import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  // addNewCategory,
  fetchAllCategories,
} from '../redux/slices/categoriesSlice';
import { reportError } from '../redux/slices/errorsSlice';

function apiGetAllCategories() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:5000/api/categories',
  });
}

function* getAllCategories(action) {
  try {
    const categories = yield call(apiGetAllCategories);
    yield put(fetchAllCategories(categories.data));
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* watchGetAllCategories() {
  yield takeEvery('getAllCategories', getAllCategories);
}

const categoriesSagas = [watchGetAllCategories];

export default categoriesSagas;