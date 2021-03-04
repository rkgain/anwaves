import React from 'react';
import Logo from '../../assets/images/logo.png';
//import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Nav = (props) => {
    return (

        <div className="container example2 ">
            <nav className="nav navbar-default navbar-fixed-top redcolor" id="menuhome">
                <div className="container-fluid">
                    <div className="navbar-header" >
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
                            <span className="sr-only"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt="Andaman blue waves logo" className="logo" />
                        </a>
                    </div>
                    <div id="navbar2" className="navbar-collapse collapse" >
                        <ul className="nav navbar-nav navbar-right" style={{ marginTop: "8px" }}>

                            <li> <a href="/">
                                Home
            </a></li>
                            <li>  <a href="/places-to-visit-in-andaman">
                                Places
            </a></li>

                            <li>       <a href="/contact-us">
                                Contact Us
            </a></li>
                            {/* <li className="dropdown">
                                <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Andamans <span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="besttime.html">Best time to visit Andaman</a></li>
                                    <li><a href="placestovisit.html">Wonders of Andamans</a></li>
                                    <li><a href="general-tips.html">Visitors General Tips</a></li>

                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Packages<span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">

                                    <li><a href="honeymoon3n4d.html">Honeymoon 3 Nights 4 Days</a></li>
                                    <li><a href="honeymoon5n6d.html">Honeymoon 5 Nights 6 Days</a></li>
                                    <li><a href="andamanholi6n7d.html">Andaman Holiday 6 Nights 7 Days</a></li>
                                    <li><a href="family7n8d.html">Family 7 Nights 8 Days</a></li>
                                    <li><a href="family8n9d.html">Family 8 Nights 9 Days</a></li>
                                    <li><a href="group9n10d.html">Group 9 Nights 10 Days</a></li>

                                </ul>
                            </li>
                            <li><a href="Activities.html">Activities</a></li>
                            <li><a href="aboutus.html">About Us</a></li>
                            <li><a href="contact.html">Contact Us</a></li> */}

                        </ul>
                    </div>

                </div>

            </nav>
        </div>

    )
}
export default Nav;