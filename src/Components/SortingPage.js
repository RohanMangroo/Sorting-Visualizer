import React from 'react';
import Controls from './Controls';
import Bars from './Bars';
import Button from './Button';
import Metrics from './Metrics';

export default function SortingPage() {
  return (
    <div className="page">
      <div className="page-top">
        <div className="page-top-left">
          <p className="page-top-left-text"></p>
        </div>
        <div className="page-top-right">
          <Bars />
        </div>
      </div>
      <div className="page-bottom">
        <div className="page-bottom-left">
          <Controls />
        </div>
        <div className="page-bottom-mid">
          <Button />
        </div>
        <div className="page-bottom-right">
          <Metrics />
        </div>
      </div>
    </div>
  );
}
