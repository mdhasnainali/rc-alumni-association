import React from 'react';
import './Header.css'

const Header = () => {
    const target= 2 ;
    return (
        <div className="header">
            <h1>Rajshahi College HSC Alumni Association</h1>
            <h3>Donation Campaign</h3>
            <h3>Estimated Target: {target} Million Doller</h3>
        </div>
    );
};

export default Header;