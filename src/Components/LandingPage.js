import React from 'react';
import sortingVizImage from '../Images/sortingVizImage.jpg';

export default function LandingPage() {
  return (
    <div className="lp-page-container">
      <div className="lp-subcontainer lp-left"></div>
      <div className="lp-subcontainer lp-right">
        <div className="image-container">
          <img className="lp-image" src={sortingVizImage} alt="logo" />
        </div>
      </div>
    </div>
  );
}
