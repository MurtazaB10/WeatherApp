import React from 'react'; 
import logo from './img/logo.jpg';

const Header = () => {
  return (
    <>
        <div className="header">
            <img src={logo} alt="logo" width='80' height='80' />
            <h1> Murtaza Keep </h1>
        </div>
    </>
  );
}

export default Header;