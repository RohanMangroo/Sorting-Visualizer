import React from 'react';
import { connect } from 'react-redux';

function Metrics({ metrics, bars }) {
  return (
    <div className="metrics-container">
      <div className="metrics-sub-container">
        <div>
          <label>Bars:</label>
          <span>{bars.barCount}</span>
        </div>
        <div>
          <label>Speed:</label>
          <span>{bars.speed}</span>
        </div>
        <div>
          <label>Swaps:</label>
          <span>{metrics.swaps}</span>
        </div>
        <div>
          <label>Checks:</label>
          <span>{metrics.checks}</span>
        </div>
        <div>
          <label>Recursive Splits:</label>
          <span>{metrics.splits}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ metrics, bars }) => {
  return {
    metrics,
    bars,
  };
};

export default connect(mapStateToProps, null)(Metrics);
