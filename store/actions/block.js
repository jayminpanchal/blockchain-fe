import {
  FETCH_LATEST_BLOCK,
  FETCH_SINGLE_BLOCK,
  FETCH_SINGLE_TRANSACTION_BLOCK,
  SET_LATEST_BLOCK,
  SET_LATEST_BLOCK_ERROR,
  SET_SINGLE_BLOCK,
  SET_SINGLE_BLOCK_ERROR,
  SET_SINGLE_TRANSACTION_BLOCK,
  SET_SINGLE_TRANSACTION_BLOCK_ERROR,
} from "../actionTypes";

export const fetchLatestBlock = (payload) => ({
  type: FETCH_LATEST_BLOCK,
  payload,
});

export const setLatestBlock = (payload) => ({
  type: SET_LATEST_BLOCK,
  payload,
});

export const setLatestBlockError = (payload) => ({
  type: SET_LATEST_BLOCK_ERROR,
  payload,
});

export const fetchSingleBlock = (payload) => ({
  type: FETCH_SINGLE_BLOCK,
  payload,
});

export const setSingleBlock = (payload) => ({
  type: SET_SINGLE_BLOCK,
  payload,
});

export const setSingleBlockError = (payload) => ({
  type: SET_SINGLE_BLOCK_ERROR,
  payload,
});

export const fetchSingleTransactionBlock = (payload) => ({
  type: FETCH_SINGLE_TRANSACTION_BLOCK,
  payload,
});

export const setSingleTransactionBlock = (payload) => ({
  type: SET_SINGLE_TRANSACTION_BLOCK,
  payload,
});

export const setSingleTransactionBlockError = (payload) => ({
  type: SET_SINGLE_TRANSACTION_BLOCK_ERROR,
  payload,
});
