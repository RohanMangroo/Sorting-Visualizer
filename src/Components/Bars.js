import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateBars } from '../store/barsReducer';
import { genArray } from '../utils';
//Using the uuid libary for unique identifiers for react keys
import { v4 as uuidv4 } from 'uuid';

//================================================================================================================//
function Bars({ updateBarsInfo, initialHeights, barCount }) {
  const barsContainer = useRef(null);

  useEffect(() => {
    //We will use the container height to calculate the heights of the bars
    const containerHeight = barsContainer.current.clientHeight;

    //Here we are returning the actual numbers we are sorting(nums) and the initial heights(the initial heights will be a percentage of the container height, that way we can style the bar heights with a percentage which will allow for responsiveness)

    //barCount comes from Redux state
    const { nums, heightPercentages } = genArray(barCount, containerHeight);

    //This is the only component that calls genArray(), so when we do call genArray() we need to make sure we update all the neccessary info about the bars so we will have access to the most up to date info about the bars in other components.

    //A Redux action creator that updates the numbers we will be sorting(nums), the actual DOM bars being shown on screen(barsContainer.current.childNodes) and the display heights(heightPercentages)
    updateBarsInfo(nums, barsContainer.current.childNodes, heightPercentages);
  }, [updateBarsInfo, barCount]);
  //================================================================================================================//
  //initialHeights contains a number that can be used to style the bar's height based on the height of the current container. Because we are styling the bar height with a percentage, if the height of the container changes, the heights of the bars will change proportionality.

  //Because of this proportional change the bars will still have a connection to the numbers that are being sorted by the algorithm, the heights originate form these numbers

  //The bars on the screen act as the visual representation of the numbers being sorted
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
//================================================================================================================//
const mapStateToProps = ({ bars }) => {
  return {
    nums: bars.nums,
    initialHeights: bars.initialHeights,
    barCount: bars.barCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBarsInfo: (nums, displayBars, initialHeights) => {
      return dispatch(updateBars(nums, displayBars, initialHeights));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
