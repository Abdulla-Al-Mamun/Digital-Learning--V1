import React from 'react';
import './Navigation.css';
import logo from '../../../Images/logo.png';
const Navigation = () => {
    return (
        <nav className='nav-container'>
            <img style={{height:'20px'}} src={logo} alt="" />
            <span style={{color:'white', fontSize:'20px', fontWeight:'900', marginLeft:'2px'}}>Digital Learning</span>
            <a style={{marginLeft:'20%'}} href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/popular-courses">Popular Courses</a>
            <a href="/all-course">All Course</a>
            <a href="/contact">Contact Us</a>
            <button id='login'><a href="/login-registration">Login/Registration</a></button>
        </nav>
    );
};

export default Navigation;