import React from 'react';


import Radhanagar from "../../assets/images/radhanagar.jpg";
import Cell from "../../assets/images/cellularjail.jpg"
import Bridge from "../../assets/images/bridgeneil.jpg";
import Havelock from "../../assets/images/havelock.jpg";
import Long from "../../assets/images/longisland.jpg";
import Wandoor from "../../assets/images/wanddorsunset.jpg";
import Chidiyatapu from "../../assets/images/chidiyatapu.jpg";
import Portblair from "../../assets/images/portblair.jpg";
import Ross from "../../assets/images/ross.jpg";
import RossSmith from "../../assets/images/rosssmith1.jpg";
import { Helmet } from 'react-helmet';

const Places = (props) => {
    return (
        <main className="content">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Places to visit in Andaman - Andaman Blue Waves </title>
                <link rel="canonical" href="https://andamanbluewaves.com/places-to-visit-in-andaman" />
            </Helmet>
            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 shadow">
                            <h2 className="section-title">Wonders of Andaman</h2>

                            <div className="row">
                                <div className="col-sm-6">  <b>RADHANAGAR BEACH</b>
                                    <img src={Radhanagar} alt="radhanagar beach swaraj dweep" />
                                    <p>
                                        Breaking down at the famous Radhanagar beach at Havelock.
                                        Experience pure bliss as you walk across the pristine white sands while the sweet droplets of rains kiss your face.
</p>
                                </div>
                                <div className="col-sm-6">

                                    <b>CELLULAR JAIL</b>
                                    <img src={Cell} alt="cellular jail" />
                                    <p>
                                        The intriguing cellular jail gives a peek in the past
                                            Get the first-handed experience of the Kala Pani during the first rains.   </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <b>INCRIDBLE NATURAL BRIDGE FORMATION AT NEIL ISLAND</b>
                                    <img src={Bridge} alt="natural bridge shaheed dweep" />
                                    <p>
                                        The sound of the waves crashing against the majestic rocks is absolutely calming.</p>
                                </div>
                                <div className="col-sm-6 ">

                                    <b>NATURAL DRIFTWOOD AT KALAPATHAR, HAVELOCK</b>
                                    <img src={Havelock} alt="kalapathar beach havelock" />
                                    <p>
                                        Relax and soak in the turquoise blue water as you enjoy the lovely monsoon breeze.
                                        </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 wow fadeIn">
                                    <b>LONG ISLAND</b>
                                    <img src={Long} alt="Long island" />
                                    <p>
                                        The pristine beauty of long island and adjacent islands in the form of lush green tropical forests, untouched virgin beaches coupled with unique Marine ecosystem attracts the tourists from different parts of India and abroad. Long island is also a paradise for birding. The islands have dense tropical forest of all types ranging from tidal swamp forest to evergreen forest.
                                        </p>
                                </div>
                                <div className="col-sm-6 wow fadeIn">

                                    <b>SPECTACULAR SUNSET AT WANDOOR BEACH</b>
                                    <img src={Wandoor} alt="sunset at wnadoor beach" />
                                    <p>
                                        The perfect scenery with sunset across the horizon is a dream come true.
                                        </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 wow fadeIn">
                                    <b>CHIDIYATAPU BEACH</b>
                                    <img src={Chidiyatapu} alt="chidiyatapu" />
                                    <p>
                                        Confluence of silky white sand and crystal blue sea at this beach. Good vibes come from serene blue tides.
                                        </p>
                                </div>
                                <div className="col-sm-6 wow fadeIn">

                                    <b>PORT BLAIR</b>
                                    <img src={Portblair} alt="science center port blair" />
                                    <p>
                                        Scattered islets dotting the seascape at port blair. The picturesque beauty amidst the vast blue ocean is sure to calm you.
                                        </p>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-sm-6 wow fadeIn">

                                    <b >ROSS ISLAND</b>
                                    <img src={Ross} alt="Ross island port blair" />
                                    <p>
                                        A 20 minutes boat ride from Port Blair is the administrative Headquarters of the British India. Ross Island in its day was also known as # PARISOFTHEEAST.
                                        </p>
                                </div>
                                <div className="col-sm-6 wow fadeIn">
                                    <b>ROSS and SMITH ISLAND</b>
                                    <img src={RossSmith} alt="ross and smith iland" />
                                    <p>
                                        They are also known as Twin Island. They are connected with a white sand goes inside sea sometimes coz of the high tide and surface up during the low tide. A must visit place during your trip to Andaman , Don’t forget to add this on your bucket list.
                                        </p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>


        </main>

    )
}
export default Places;