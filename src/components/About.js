import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const About = ({ onRouteChange }) => {
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>About</h1>
                <div>
                    {/* <button onClick={() => onRouteChange('home')}>Home</button>
                    <button className='disabled'>About</button>
                    <button onClick={() => onRouteChange('contact')}>Contact</button> */}
                    <NavLink className='button' activeClassName='disabled' exact to='/'>Home</NavLink>
                    <NavLink className='button' activeClassName='disabled' to='/about'>About</NavLink>
                    <NavLink className='button' activeClassName='disabled' to='/contact'>Contact</NavLink>
                </div>
            </header>
        </div>
    )
}

export default About;