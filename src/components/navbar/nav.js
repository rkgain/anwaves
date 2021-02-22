import React from 'react'
// import { Link } from "react-router-dom";
const Nav = (props) => {
    return (

        <div class="container example2 ">
            <nav class="nav navbar-default navbar-fixed-top trans redcolor" id="menuhome">
                <div class="container-fluid" style={{ height: "70px" }}>
                    <div class="navbar-header" >
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
                            <span class="sr-only"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <img src="images/logo1.png" alt="Andaman ocean and hills logo" class="logo" />
                        </a>
                    </div>
                    <div id="navbar2" class="navbar-collapse collapse" >
                        <ul class="nav navbar-nav navbar-right" style={{ marginTop: "8px" }}>
                            <li class="active"><a href=".">Home</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Andamans <span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="besttime.html">Best time to visit Andaman</a></li>
                                    <li><a href="placestovisit.html">Wonders of Andamans</a></li>
                                    <li><a href="general-tips.html">Visitors General Tips</a></li>

                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Packages<span class="caret"></span></a>
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
                            <li><a href="contact.html">Contact Us</a></li>

                        </ul>
                    </div>

                </div>

            </nav>
        </div>

    )
}
export default Nav;