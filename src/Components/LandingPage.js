import React from 'react';
import sortingVizImage from '../Images/sortingVizImage.jpg';

export default function LandingPage() {
  return (
    <div className="lp-page-container">
      <div className="lp-subcontainer lp-left">
        <div>
          {/* <div className="lp-left-top">
            <div className="lp-left-top-text">
              <p>WHAT IS A SORTING ALGORITHM?</p>
            </div>
            <div className="lp-left-top-text">
              <p>
                In computer science, a sorting algorithm is an algorithm that
                puts elements of a list into an order.
              </p>
              <p>
                The most frequently used orders are numerical order and
                lexicographical order, and either ascending or descending.
              </p>
              <p>
                Efficient sorting is important for optimizing the efficiency of
                other algorithms (such as search and merge algorithms) that
                require input data to be in sorted lists.
              </p>
              <p>
                Sorting is also often useful for canonicalizing data and for
                producing human-readable output.
              </p>
            </div>
          </div> */}

          <div className="lp-left-bottom">
            <div>
              <button>SORT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lp-subcontainer lp-right">
        <div>
          <img className="lp-image" src={sortingVizImage} alt="logo" />
          <div className="text-container">
            <h1>SORT</h1>
            <h1>WATCH</h1>
            <h1>LEARN</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
