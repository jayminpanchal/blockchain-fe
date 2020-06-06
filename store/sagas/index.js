import { all } from "redux-saga/effects";

import {
  fetchLatestBlockWatcher,
  fetchSingleBlockWatcher,
  fetchSingleTransactionBlockWatcher,
} from "./block";

export default function* rootSaga() {
  yield all([
    fetchLatestBlockWatcher(),
    fetchSingleBlockWatcher(),
    fetchSingleTransactionBlockWatcher(),
  ]);
}
