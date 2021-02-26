import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';

//import './style/App.scss';
import 'aos/dist/aos.css';

import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/animate.min.css';
import './assets/css/AOH.css';
import './assets/FA/css/font-awesome.min.css';

import Spinner from "./components/ui-components/spinner/spinner";
import Navbar from "./components/navbar/nav";
import Home from "./components/home/home";
import Footer from './components/footer/footer';
//import Contact from "./components/contact/contact";
//import Footer from "./components/footer/footer";

// import SimpleReactLightbox from "simple-react-lightbox";
// import Slider from './components/homeslider/slider';
// const Portfolio = lazy(() => import('./components/portfolio/portfolio'));
//const Hero = lazy(() => import('./components/hero/hero'));

//const Packages = lazy(() => import('./components/packages/packages'));
//const Contact = lazy(() => import('./components/contact/contact'));
//const Home = lazy(() => import('./components/home/home'));
class App extends React.Component {

  componentDidMount() {
    AOS.init({
      duration: 500
    })
  }
  render() {
    // BACKDROP RENDER


    return (
      <div className="App">
        <Navbar />


        {/* <br/><br/><br/>    
<Send/> */}
        <Switch>

          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />

            {/* <Route path='/contact' component={Blog} key="sdfsdfds"/>
              <Route path='/about' component={About} key="sdfsdfds" /> 

            <Route path='/Packages' component={Packages} />
            <Route path='/Contact-us' component={Contact} /> */}

          </Suspense>


        </Switch>
        <Footer />

        {/* <Slider/> */}
        {/* <SimpleReactLightbox>
           <Suspense fallback={<h1>Still Loading…</h1>}>
           
          <Portfolio />
          </Suspense>
              </SimpleReactLightbox>
         <Price/>
          <Partners />
         */}

        {/* <Contact /> */}
        {/* <Footer /> */}


      </div>
    );
  }
}

export default App;
