import React from 'react';
import Button from './Button';

export default function Metrics() {
  return (
    <div className="metrics-container">
      <div className="metrics-sub-container"></div>
      <div>
        <Button name="STOP" type="stop-btn" />
      </div>
    </div>
  );
}
