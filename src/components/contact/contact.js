import React from 'react';
import { Helmet } from 'react-helmet';

import ContactEmail from './contact-email'
const Contact = (props) => {
    return (
        <main className="content">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact us - Andaman Blue Waves </title>
                <link rel="canonical" href="https://andamanbluewaves.com/Contact-us" />
            </Helmet>
            <div className="fullwidth-block">
                <div className="container">
                    <h1 className="section-title">Contact Us</h1>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <ContactEmail />

                        </div>
                        <div className="col-md-6 footer-top" style={{ paddingTop: "3rem" }}>
                            <div className="map">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3029.2188753874375!2d-73.9617075!3d40.6029943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244f289a17b03%3A0x5108f35e55b5aa3c!2s983+Avenue+S%2C+Brooklyn%2C+NY+11223%2C+Amerika+Serikat!5e0!3m2!1sid!2sid!4v1411068708925" frameborder="0" style={{ border: "0" }} title="Google Map"></iframe> */}
                            </div>

                            <div className="widget widget-customer-info">

                                <ul className="list-fa">
                                    <li><i className="fa fa-map-marker"></i> Andaman Blue Waves
        <br />
            Dollygunj, near DBRAIT (Polytechnic)
        <br />
            South Andaman, Andaman & Nicobar Island
        </li>

                                    <li><i className="fa fa-phone"></i> +91-9476035176 / +91-9679578933
                                        </li>
                                    <li><i className="fa fa-envelope"></i>bilashmondal3508@gmail.com
                                        </li>
                                    <li>
                                        <div className="social-links">
                                            <a href="https://www.facebook.com/andamanbluewaves/" className="facebook" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                            <a href="https://www.instagram.com/andamanbluewaves/?igshid=zcoomrfyji9r" className="twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                            {/* <a href="#/" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                            <a href="#/" className="pinterest"><i className="fa fa-pinterest"></i></a> */}
                                        </div>
                                    </li>
                                </ul>

                            </div>




                        </div>


                    </div>

                </div>

            </div>


        </main>

    )
}
export default Contact;