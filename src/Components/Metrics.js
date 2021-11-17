import React from 'react';
import { connect } from 'react-redux';
import { updateSwaps, updateChecks } from '../store/metricsReducer';

function Metrics({ swaps, checks, splits, updateSwaps_, updateChecks_ }) {
  return (
    <div className="metrics-container">
      <div className="metrics-sub-container">
        <div>
          <label>Swaps</label>
          <span>{swaps}</span>
        </div>
        <div>
          <label>Checks</label>
          <span>{checks}</span>
        </div>
        <div>
          <label>Recursive Splits</label>
          <span>{splits}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ metrics }) => {
  return {
    swaps: metrics.swaps,
    checks: metrics.checks,
    splits: metrics.recursiveSplit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSwaps_: (value) => {
      return dispatch(updateSwaps(value));
    },
    updateChecks_: (value) => {
      return dispatch(updateChecks(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Metrics);
