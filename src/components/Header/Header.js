import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to rest Countries</h1>
            <a href="/home">Home</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    );
};

export default Header;