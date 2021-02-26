import React from 'react'
const Footer = (props) => {
    return (
        <footer class="site-footer wow fadeInUp">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="widget">
                                <div class="branding pull-left">
                                    <img src="images/logo1.png" alt="Andaman Ocean  Hills logo" class="logo" />
                                    <h1 class="site-title"><a href="index.html">Andaman Ocean  Hills</a></h1>
                                    <small class="site-description">Your Island Paradise</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="widget">
                                <h3 class="widget-title">Helpful Links</h3>
                                <ul class="list-arrow">
                                    <li><a href="Activities.html">Activities</a></li>
                                    <li><a href="general-tips.html">General Tips</a></li>
                                    <li><a href="placestovisit.html">Wonders of Andamans</a></li>
                                    <li><a href="aboutus.html">About Us</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="widget widget-customer-info">
                                <h3 class="widget-title">Contact Us</h3>
                                <ul class="list-fa">
                                    <li><i class="fa fa-map-marker"></i> Andaman Ocean And Hills
                                        <br />
                                            Plot No.474, Bathu Basti, ATR road Port Blair
                                        <br />
                                            South Andaman, Andaman df Nicobar Island
                                        </li>
                                    <li><i class="fa fa-phone"></i> +91-8900900844 / 03192-259418 <br />+91-9933292155 / +91-9531915414
                                        </li>
                                    <li><i class="fa fa-envelope"></i>andamanoceanandhills@gmail.com <br />
                                        findus@andamanoceanandhills.com
                                        </li>
                                </ul>
                                <div class="social-links">
                                    <a href="#/" class="facebook"><i class="fa fa-facebook"></i></a>
                                    <a href="#/" class="twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#/" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                    <a href="#/" class="pinterest"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="colophon">
                <div class="container">
                    <p class="copy">&copy; 2021 Andaman Blue Waves | Designed with <span style={{ color: "red", fontSize: "1rem" }} > &#9829; </span>  by <a href="https://techiepillars.com" target="_blank" rel="noopener noreferrer">TechiePillars</a></p>
                </div>
            </div>
        </footer>

    )
}
export default Footer;