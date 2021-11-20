import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import descriptions from '../descriptions';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function AlgoDescription({ selectedButton }) {
  const [descript, setDescript] = useState(descriptions.bubbleSort);

  //The description that appears on the screen is chosen by the the function getSelectedDescription
  //This function will take in the selectedButton which is a prop from the redux state and use that to pick a description
  useEffect(() => {
    setDescript(getSelectedDescription(selectedButton, descriptions));
  }, [selectedButton]);

  return (
    <div className="algo-description-container">
      <SimpleBar className="descrip-scroll">
        <div className="descrip-sub-container">
          <h1 className="descrip-title">{descript.title}</h1>
          <div className="descrip-body">
            <div className="algo-description">
              <h3>Algorithim Description</h3>
              <p>{descript.algoDescript}</p>
            </div>
            <div className="viz-description">
              <h3>Visualization Description</h3>
              <p>{descript.vizDescript}</p>
            </div>
            <div className="complexity">
              <h4>Complexity</h4>
              <p>{descript.complexity}</p>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}

function getSelectedDescription(selectedButton, descriptions) {
  return descriptions[selectedButton];
}

const mapStateToProps = ({ buttonSelection }) => {
  return {
    selectedButton: buttonSelection.algoName,
  };
};

export default connect(mapStateToProps, null)(AlgoDescription);
