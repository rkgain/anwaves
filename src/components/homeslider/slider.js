// Libraries
import React from 'react';



import im1 from '../../assets/images/im1.jpg';

import im2 from '../../assets/images/im2.jpg';
import im3 from '../../assets/images/im3.jpg';


export default function BasicSlider() {
  return (
    <div className="slider">
      <ul className="slides">
        <li data-background={im1}>
          <div className="container">
            <div className="slide-caption col-md-12">
              <h2 className="slide-title">Radhanagar Beach Swaraj Dweep</h2>
              <a href="/places-to-visit-in-andaman">More Places</a>

            </div>
          </div>
        </li>
        <li data-background={im2}>
          <div className="container">
            <div className="slide-caption col-md-12">
              <h2 className="slide-title">Cellular Jail Port Blair</h2>
              <a href="/places-to-visit-in-andaman">More Places</a>
            </div>
          </div>
        </li>
        <li data-background={im3}>
          <div className="container">
            <div className="slide-caption col-md-12">
              <h2 className="slide-title">Ross and Smith Diglipur</h2>
              <a href="/places-to-visit-in-andaman">More Places</a>
            </div>
          </div>
        </li>


      </ul>
      <div className="flexslider-controls">
        <div className="container">
          <ol className="flex-control-nav">
            <li><a href="#/">1</a></li>
            <li><a href="#/">2</a></li>
            <li><a href="#/">3</a></li>


          </ol>
        </div>
      </div>
    </div>

  );
}