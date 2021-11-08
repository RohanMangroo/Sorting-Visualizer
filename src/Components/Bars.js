import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateBars } from '../store/local';
import { v4 as uuidv4 } from 'uuid';

function Bars({ update, heights }) {
  const barsContainer = useRef(null);

  useEffect((props) => {
    const containerHeight = barsContainer.current.clientHeight;
    const { nums, arrayOfHeights } = genArray(200, containerHeight);

    update(nums, arrayOfHeights);
  }, []);

  return (
    <div ref={barsContainer} className="bars-container">
      {heights.map((height) => (
        <div
          className="bar"
          key={uuidv4()}
          style={{ height: `${height}%` }}
        ></div>
      ))}
    </div>
  );
}

function genArray(value, containerHeight) {
  const arrayOfNums = [];
  const arrayOfHeights = [];
  for (let i = 0; i < value; i++) {
    const randomNum = genRandomNum(5, 450);
    const heightPercentage = (randomNum / containerHeight) * 100;
    arrayOfNums.push(randomNum);
    arrayOfHeights.push(heightPercentage);
  }
  return {
    nums: arrayOfNums,
    arrayOfHeights,
  };
}

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const mapStateToProps = (state) => {
  return {
    nums: state.nums,
    heights: state.heights,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: function (nums, heights) {
      return dispatch(updateBars(nums, heights));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
