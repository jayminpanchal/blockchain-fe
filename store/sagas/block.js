import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { API_BASE_URL } from "../../utils/constants";
import * as actionTypes from "../actionTypes";
import {
  setSingleBlock,
  setSingleBlockError,
  showLoader,
  hideLoader,
  setSingleTransactionBlock,
  setSingleTransactionBlockError,
  setLatestBlock,
  setLatestBlockError,
} from "../actions";

function fetchSingleBlockApi(params) {
  return axios.get(`${API_BASE_URL}single-block/${params.blockHash}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

function* fetchSingleBlockActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(fetchSingleBlockApi, action.payload);
    yield put(setSingleBlock(response.data));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data
        : { message: "Server Error." };
    yield put(setSingleBlockError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* fetchSingleBlockWatcher() {
  yield takeLatest(
    actionTypes.FETCH_SINGLE_BLOCK,
    fetchSingleBlockActionEffect
  );
}

function fetchSingleTransactionBlockApi(params) {
  return axios.get(`${API_BASE_URL}single-transaction/${params.txHash}`, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* fetchSingleTransactionBlockActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(fetchSingleTransactionBlockApi, action.payload);
    yield put(setSingleTransactionBlock(response.data));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data
        : { message: "Server Error." };
    yield put(setSingleTransactionBlockError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* fetchSingleTransactionBlockWatcher() {
  yield takeLatest(
    actionTypes.FETCH_SINGLE_TRANSACTION_BLOCK,
    fetchSingleTransactionBlockActionEffect
  );
}

function fetchLatestBlockApi() {
  return axios.get(`${API_BASE_URL}latest-block`, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* fetchLatestBlockActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(fetchLatestBlockApi);
    yield put(setLatestBlock(response.data));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data
        : { message: "Server Error." };
    yield put(setLatestBlockError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* fetchLatestBlockWatcher() {
  yield takeLatest(
    actionTypes.FETCH_LATEST_BLOCK,
    fetchLatestBlockActionEffect
  );
}
