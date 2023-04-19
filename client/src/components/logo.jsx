import React from 'react';
import logo from '../spanishLabLogo7.png' // Tell Webpack this JS file uses this image

console.log(logo);

function Header() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo"  class = "spanishLabLogo" />;
}

export default Header;