import React from 'react';
const Footer = (props) => {
    return (
        <footer className="site-footer wow fadeIn">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="widget widget-customer-info">

                                <ul className="list-fa">
                                    <li><i className="fa fa-map-marker"></i> Andaman Blue Waves
                                        <br />
                                            Dollygunj, near DBRAIT (Polytechnic)
                                        <br />
                                            South Andaman, Andaman & Nicobar Island
                                        </li>

                                </ul>

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="widget widget-customer-info">

                                <ul className="list-fa">

                                    <li><i className="fa fa-phone"></i> +91-9476035176 / +91-9679578933
                                        </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="widget widget-customer-info">

                                <ul className="list-fa">


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

            <div className="colophon">
                <div className="container">
                    <p className="copy">&copy; 2021 Andaman Blue Waves | Designed with <span style={{ color: "red", fontSize: "1rem" }} > &#9829; </span>  by <a href="https://techiepillars.com" target="_blank" rel="noopener noreferrer">TechiePillars</a></p>
                </div>
            </div>
        </footer>

    )
}
export default Footer;