import React from 'react';
import Button from '../Button/Button';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src="./Logo.svg" alt="logo" />

        <div className="header-buttons">
          <Button title="Users" />
          <Button title="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Header;
