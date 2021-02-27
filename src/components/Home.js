import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Home = ({ onRouteChange }) => {
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Home</h1>
                <div>
                    {/* <button className='disabled'>Home</button>
                    <button onClick={() => onRouteChange('about')}>About</button>
                    <button onClick={() => onRouteChange('contact')}>Contact</button> */}
                    <NavLink className='button' activeClassName='disabled' exact to='/'>Home</NavLink>
                    <NavLink className='button' activeClassName='disabled' to='/about'>About</NavLink>
                    <NavLink className='button' activeClassName='disabled' to='/contact'>Contact</NavLink>
                </div>
            </header>
        </div>
    )
}

export default Home;