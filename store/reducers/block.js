import {
  SET_SINGLE_BLOCK,
  SET_LATEST_BLOCK,
  SET_SINGLE_TRANSACTION_BLOCK,
  SET_SINGLE_BLOCK_ERROR,
  SET_LATEST_BLOCK_ERROR,
  SET_SINGLE_TRANSACTION_BLOCK_ERROR,
} from "../actionTypes";

const initialState = {
  singleBlock: null,
  singleTransactionBlock: null,
  latestBlock: null,
  singleBlockError: null,
  singleTransactionBlockError: null,
  latestBlockError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_BLOCK:
      return { ...state, singleBlock: action.payload, singleBlockError: null };
    case SET_LATEST_BLOCK:
      return { ...state, latestBlock: action.payload, latestBlockError: null };
    case SET_SINGLE_TRANSACTION_BLOCK:
      return {
        ...state,
        singleTransactionBlock: action.payload,
        singleTransactionBlockError: null,
      };
    case SET_SINGLE_BLOCK_ERROR:
      return { ...state, singleBlockError: action.payload, singleBlock: null };
    case SET_LATEST_BLOCK_ERROR:
      return { ...state, latestBlockError: action.payload, latestBlock: null };
    case SET_SINGLE_TRANSACTION_BLOCK_ERROR:
      return {
        ...state,
        singleTransactionBlockError: action.payload,
        singleTransactionBlock: null,
      };
    default:
      return { ...state };
  }
};
