import React from 'react'
const Services = (props) => {
    return (
        <div className="fullwidth-block features-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="feature left-icon wow fadeInUp">
                            <i className="fa fa-thumbs-up" style={{ fontSize: "40px" }}></i>
                            <h3 className="feature-title">Customized Tour Packages</h3>
                            <p>We provide professional travel services to our valuable customers to unveil the beauty of the exotic emerald Islands.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="feature left-icon wow fadeInUp">
                            <i className="icon-hotel"></i>
                            <h3 className="feature-title">Hotel Booking</h3>
                            <p>The most important and primary aspect to take care while you visit the islands are the hotel booking. We help you make your choices, with an array of hotels and resorts.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="feature left-icon wow fadeInUp">
                            <i className="icon-jetski"></i>
                            <h3 className="feature-title">Adventure Sports</h3>
                            <p>We offer an array of Adventure Water Sports options to suit each one of you. Either, on the surface of water; water sports ride etc or under water like Scuba Diving or Seawalk. Wee cater to all your needs.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="feature left-icon wow fadeInUp">
                            <i className="fa fa-car"></i>
                            <h3 className="feature-title">Car Rentals /Cruise Ticketing</h3>
                            <p>Based in Port Blair Andaman Ocean and Hills is well established and we provide you the best cost for your car rentals and cruise ticketing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Services;