import React, { Component, lazy, Suspense } from 'react';
import FallbackPage from './FallbackPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     route: 'home'
  //   }
  // }

  // onRouteChange = (route) => {
  //   this.setState({ route: route });
  // }

  render() {
    // Without React Router
    // if (this.state.route === 'home') {
    //     return <Home onRouteChange={this.onRouteChange} />
    //   } else if (this.state.route === 'about') {
    //     return (
    //       <Suspense fallback={<FallbackPage />}>
    //         <About onRouteChange={this.onRouteChange} />
    //       </Suspense>
    //     )
    //   } else if (this.state.route === 'contact') {
    //     return (
    //       <Suspense fallback={<FallbackPage />}>
    //         <Contact onRouteChange={this.onRouteChange} />
    //       </Suspense>
    //     )
    //   }

    // With React Router
    return(
        <Suspense fallback={FallbackPage}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Suspense>
    )
  }
}

export default App;
