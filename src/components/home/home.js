import React, { useEffect } from "react";


import { scroller, animateScroll } from 'react-scroll';

import Hero from '../homeslider/slider';
import Services from '../services/service';
import Packages from '../packages/packages';
import Reviews from "../reviews/reviews";
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
        <main class="content">


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