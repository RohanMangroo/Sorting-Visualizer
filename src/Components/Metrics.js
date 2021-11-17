import React from 'react';
import { connect } from 'react-redux';

function Metrics({ metrics }) {
  return (
    <div className="metrics-container">
      <div className="metrics-sub-container">
        <div>
          <label>Swaps</label>
          <span>{metrics.swaps}</span>
        </div>
        <div>
          <label>Checks</label>
          <span>{metrics.checks}</span>
        </div>
        <div>
          <label>Recursive Splits</label>
          <span>{metrics.splits}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ metrics }) => {
  return {
    metrics,
  };
};

export default connect(mapStateToProps, null)(Metrics);
