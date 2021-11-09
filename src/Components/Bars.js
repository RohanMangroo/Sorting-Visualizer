import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateBars } from '../store/barsReducer';
import { genArray } from '../utils';
//Using the uuid libary for unique identifiers for react keys
import { v4 as uuidv4 } from 'uuid';

function Bars({ update, initialHeights, barCount }) {
  //A 'ref' used to get the container height
  const barsContainer = useRef(null);

  useEffect(
    (props) => {
      const containerHeight = barsContainer.current.clientHeight;
      const { nums, arrayOfHeights } = genArray(barCount, containerHeight);
      //A Redux action creator that updates the numbers array and the display heights in the redux state
      update(nums, barsContainer.current.childNodes, arrayOfHeights);
    },
    [update, barCount]
  );

  return (
    <div ref={barsContainer} className="bars-container">
      {initialHeights.map((height) => (
        <div
          className="bar"
          key={uuidv4()}
          style={{ height: `${height}%` }}
        ></div>
      ))}
    </div>
  );
}

const mapStateToProps = ({ bars }) => {
  return {
    nums: bars.nums,
    initialHeights: bars.initialHeights,
    barCount: bars.barCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (nums, displayBars, initialHeights) => {
      return dispatch(updateBars(nums, displayBars, initialHeights));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
