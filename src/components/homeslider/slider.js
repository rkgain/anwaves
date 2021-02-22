// Libraries
import React from 'react';



import im1 from '../../assets/images/im1.jpg';

import im2 from '../../assets/images/im2.jpg';
import im3 from '../../assets/images/im3.jpg';
import im4 from '../../assets/images/im4.jpg';
import im5 from '../../assets/images/im5.jpg';

export default function BasicSlider() {
  return (
    <div class="slider">
      <ul class="slides">
        <li data-background={im1}>
          <div class="container">
            <div class="slide-caption col-md-12">
              <h2 class="slide-title">Water sports in Andamans</h2>
              <a href="Activities.html">More Activities</a>
            </div>
          </div>
        </li>
        <li data-background={im2}>
          <div class="container">
            <div class="slide-caption col-md-12">
              <h2 class="slide-title">Ross and Smith @ Diglipur</h2>
              <a href="placestovisit.html">More Places</a>
            </div>
          </div>
        </li>
        <li data-background={im3}>
          <div class="container">
            <div class="slide-caption col-md-12">
              <h2 class="slide-title">Bharatpur Beach @ Neil Island</h2>
              <a href="placestovisit.html">More Places</a>
            </div>
          </div>
        </li>

        <li data-background={im4}>
          <div class="container">
            <div class="slide-caption col-md-12">
              <h2 class="slide-title">Laxmanpur Beach @ Neil Island</h2>
              <a href="placestovisit.html">More Places</a>
            </div>
          </div>
        </li>
        <li data-background={im5}>
          <div class="container">
            <div class="slide-caption col-md-12">
              <h2 class="slide-title">Tropical Forest  Vegetation @ Neil Island</h2>
              <a href="placestovisit.html">More Places</a>
            </div>
          </div>
        </li>
      </ul>
      <div class="flexslider-controls">
        <div class="container">
          <ol class="flex-control-nav">
            <li><a href="#/">1</a></li>
            <li><a href="#/">2</a></li>
            <li><a href="#/">3</a></li>
            <li><a href="#/">4</a></li>
            <li><a href="#/">5</a></li>

          </ol>
        </div>
      </div>
    </div>

  );
}