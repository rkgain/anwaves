import React, { useEffect } from "react";


import { scroller, animateScroll } from 'react-scroll';

import Hero from '../homeslider/slider';
import Services from '../services/service';
import Packages from '../packages/packages';
import Reviews from "../reviews/reviews";
import { Helmet } from "react-helmet";
// import { Row, Col } from "react-flexbox-grid";

const Home = (props) => {



    useEffect(() => {
        console.log(props.history.location.hash);
        if (props.history.location.hash) {
            const hash = props.history.location.hash.substring(1);
            scroller.scrollTo(hash, {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -50
            });
            // animateScroll.scrollTo(300);
        }
        else
            animateScroll.scrollToTop();
        return () => { scroller.unmount(); }
    });



    return (
        <main className="content">

            <Helmet>
                <meta charSet="utf-8" />
                <title> Andaman Blue Waves - Best class local tour operator in Andaman</title>
                <meta name="description" content="Andaman Blue Waves is a locally situated travel agency which provides best class travel solutions and tour packages for Andaman to almost every range of customers" />

                <link rel="canonical" href="https://andamanbluewaves.com/" />
            </Helmet>
            <Hero />
            <Services />
            <Packages />
            <Reviews />
            {/* <Hero />
            <Reach />
            
            <About />
            <br />
            <br />

            <Activities />
            <br />
            <br />
            <Number />
            <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading…</h3>}>
                <Blog />
            </Suspense>

            <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading…</h3>}>
                <ReviewList />
            </Suspense> */}
        </main>

    )
}
export default Home;