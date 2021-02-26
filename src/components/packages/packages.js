import React from 'react'

import Honey1 from '../../assets/images/honey1th.jpg';
import Honey2 from '../../assets/images/honey2th.jpg';
import Andaman1 from '../../assets/images/andamanth.jpg';
import Family1 from '../../assets/images/family1th.jpg';
import Family2 from '../../assets/images/family2th.jpg';
import Group from '../../assets/images/groupth.jpg';

const Packages = (props) => {
    return (

        <div class="fullwidth-block offers-section" data-bg-color="#f1f1f1">
            <div class="container">

                <h2 class="section-title">The newest holiday packages</h2>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12" >
                        <article class="packwid offer  wow bounceIn " data-wow-delay=".2s" >

                            <figure class="featured-image hov">
                                <img src={Honey1} alt="Honeymoon package thumbnail" />
                            </figure>
                            <div className="packtitle" >
                                <span>Honey Moon</span>
                                <span>3 Nights 4 days</span>
                            </div>

                            <div className="packover" >

                            </div>

                        </article>

                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="packwid offer  wow bounceIn " data-wow-delay=".2s">

                            <figure class="featured-image hov">
                                <img src={Honey2} alt="Honeymoon package thumbnail" />
                            </figure>

                            <div className="packtitle" >
                                <span>Honey Moon</span>
                                <span>3 Nights 4 days</span>
                            </div>

                            <div className="packover" >

                            </div>

                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="packwid offer  wow bounceIn " data-wow-delay=".2s">

                            <figure class="featured-image hov">
                                <img src={Andaman1} alt="Andaman Holiday package thumbnail" />
                            </figure>

                            <div className="packtitle" >
                                <span>Honey Moon</span>
                                <span>3 Nights 4 days</span>
                            </div>

                            <div className="packover" >

                            </div>


                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="packwid offer  wow bounceIn " data-wow-delay=".2s">

                            <figure class="featured-image hov">
                                <img src={Family1} alt="Family Holiday package thumbnail" />
                            </figure>

                            <div className="packtitle" >
                                <span>Honey Moon</span>
                                <span>3 Nights 4 days</span>
                            </div>

                            <div className="packover" >

                            </div>

                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="packwid offer  wow bounceIn " data-wow-delay=".2s">

                            <figure class="featured-image hov">
                                <img src={Family2} alt="Family Holiday package thumbnail" />
                            </figure>

                            <div className="packtitle" >
                                <span>Honey Moon</span>
                                <span>3 Nights 4 days</span>
                            </div>

                            <div className="packover" >

                            </div>


                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <article class="packwid offer  wow bounceIn " data-wow-delay=".2s">

                            <figure class="featured-image hov">
                                <img src={Group} alt="Group Holiday package thumbnail" />
                            </figure>

                            <div className="packtitle" >
                                <span>Honey Moon</span>
                                <span>3 Nights 4 days</span>
                            </div>

                            <div className="packover" >

                            </div>


                        </article>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Packages;