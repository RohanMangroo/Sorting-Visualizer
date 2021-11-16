import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import descriptions from '../descriptions';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function AlgoDescription({ selectedButton }) {
  const [descript, setDescript] = useState(descriptions.bubbleSort);

  useEffect(() => {
    const description = getSelectedDescription(selectedButton, descriptions);
    setDescript(description);
  }, [selectedButton]);

  return (
    <div className="algo-description-container">
      {descript ? (
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
              {/* <div className="learning-display">
              <h4>Learning Mode</h4>
              <p>{descript.learningMode}</p>
            </div> */}
            </div>
          </div>
        </SimpleBar>
      ) : (
        <div>Please choose an algorithm from below</div>
      )}
    </div>
  );
}

function getSelectedDescription(selectedButton, descriptions) {
  return descriptions[selectedButton];
}
const mapStateToProps = ({ buttonSelection }) => {
  return {
    selectedButton: buttonSelection.buttonSelection,
  };
};

export default connect(mapStateToProps, null)(AlgoDescription);
