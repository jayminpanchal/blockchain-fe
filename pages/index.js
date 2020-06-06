import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import SingleBlock from "../components/SingleBlock";
import LatestBlock from "../components/LatestBlock";
import SingleTransactionBlock from "../components/SingleTransactionBlock";
import {
  fetchSingleBlock,
  fetchLatestBlock,
  fetchSingleTransactionBlock,
} from "../store/actions";
import Loading from "../components/Loading";

const Home = ({
  singleBlock,
  latestBlock,
  singleTransactionBlock,
  fetchSingleBlock,
  fetchLatestBlock,
  fetchSingleTransactionBlock,
  isLoading,
  singleBlockError,
  latestBlockError,
  singleTransactionBlockError,
}) => {
  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="content-container">
        <SingleBlock
          singleBlock={singleBlock}
          fetchSingleBlock={fetchSingleBlock}
          singleBlockError={singleBlockError}
        />
        <LatestBlock
          latestBlockError={latestBlockError}
          latestBlock={latestBlock}
          fetchLatestBlock={fetchLatestBlock}
        />
        <SingleTransactionBlock
          singleTransactionBlock={singleTransactionBlock}
          fetchSingleTransactionBlock={fetchSingleTransactionBlock}
          singleTransactionBlockError={singleTransactionBlockError}
        />
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loaderReducer.loader,
    singleBlock: state.blockReducer.singleBlock,
    latestBlock: state.blockReducer.latestBlock,
    singleTransactionBlock: state.blockReducer.singleTransactionBlock,
    singleBlockError: state.blockReducer.singleBlockError,
    latestBlockError: state.blockReducer.latestBlockError,
    singleTransactionBlockError: state.blockReducer.singleTransactionBlockError,
  };
};

const mapDispatchToProps = {
  fetchSingleBlock,
  fetchLatestBlock,
  fetchSingleTransactionBlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
